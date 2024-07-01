const { getBookByIsbn }=require('../service/book.service')

const getLateFine= async (issueRecord)=>{
    let { returnDate}=issueRecord;
    returnDate =getStartOfDate(returnDate);
    let currentdate =getStartOfDate(new Date());
    if(returnDate > currentdate){
        return { lateFine: 0,book :null};
    }
    const differenceOfDays=
    (currentdate.getTime()-returnDate,getTime())/(1000*60*60*24);
    const book =await getBookByIsbn(issueRecord.bookIsbnNo);
    return { lateFine:differenceOfDays*0.015*book.price,book};
};

const getStartOfDate=(date)=>{
    return new date(date.getFullyear(),date.getMonth(),date.getDate(),0,0,0);
};

module.exports={ getLateFine };


