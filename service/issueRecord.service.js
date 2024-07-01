const BookUnavailableException=require('../exceptions/BookUnavailable');
const DuplicateIssueException=require('../exceptions/Duplicateissue')
const NotFoundException=require('../exceptions/NotFoundException')
const issueRecordRepository =require("../repository/issueRecord.repository");
const bookService=require("../service/book.service");
const { getLateFine : getLateFineUtil} =require("../util/book.util");

const addIssueRecord=async (issueRecordInfo)=>{
   try{
    const { studentRegNo,bookIsbnNo}=issueRecordInfo;
    const existingBookIssue=await getIssueRecordByfilter({
        studentRegNo,
        bookIsbnNo,
        status:"Issued",
    })
    if(existingBookIssue?.length){
        const message = `The student with Registration No.: ${studentRegNo} has already issued a book with ISBN: ${bookIsbnNo} and it is in ISSUED state.`;
        console.info(message);
        throw new DuplicateIssueException(message);
    }
    const book =await bookService.getBookByIsbn(bookIsbnNo);
    if (!book?.count) {
        const message = `Book Issue Failed! The Book with ISBN ${bookIsbnNo} is not available for issuing.`;
        console.info(message);
        throw new BookUnavailableException(message);
      }
      const issueRecord=await issueRecordRepository.addIssueRecord(
        issueRecordInfo
      );
      if(issueRecord){
        book.count--;
        bookService.updateBook(book);
      }
   }
   catch(err){
    console.error(err);
    throw err;
   }

}
const getIssueRecordByid=async (issueRecordId)=>{
    return await issueRecordRepository.getIssueRecordById(issueRecordId);
}

const getIssueRecordsByFilters=async(filterObject)=>{
    return await issueRecordRepository.getIssueRecordByFilters(filterObject);
}


const updateIssueRecord =async (issueRecord)=>{
    return await issueRecordRepository.updateIssueRecord(issueRecord);
}

const deleteIssueRecord=async (issueRecord)=>{
    return await issueRecordRepository.deleteIssueRecord(issueRecord);
}
const getLateFine=async (issueRecordId)=>{
    const issueRecord=await getIssueRecordByid(issueRecordId);
    if(!issueRecord){
        return null;
    }
    const {lateFine}=await getLateFineUtil(issueRecord);
    return lateFine;
}

const submitBook =async (issueRecordId)=>{
    const issueRecord=await getIssueRecordByid(issueRecordId);
    if(!issueRecord){
        throw new NotFoundException("IssueRecord","_id","issueRecordId");
    }
    let { lateFine,book }=await getLateFineUtil (issueRecord);
    issueRecord.returnDate=new Date();
    issueRecord.status="Returned";
    issueRecord.lateFine=lateFine;
    if(!book){
        book = await bookService.getBookByIsbn(issueRecordId.bookIsbnNo);
    }
    book.count++;
    const wasUpdated=await issueRecordRepository.updateIssueRecord(issueRecord);
    if(wasUpdated){
        bookService.updateBook(book);
        return lateFine;
    }
    return false;
};

module.exports={
 addIssueRecord,
  getIssueRecordByid,
  getIssueRecordsByFilters,
  updateIssueRecord,
  deleteIssueRecord,
  getLateFine,
  submitBook,

}