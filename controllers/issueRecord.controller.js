const BookUnavailableException = require("../exceptions/BookUnavailable");
const DuplicateIssueException = require("../exceptions/Duplicateissue");
const NotFoundException = require("../exceptions/NotFoundException");
const issueRecordService=require("../service/issueRecord.service")

const addIssueRecord =async (req,res)=>{
    try{
        const issueRecord={...req.body};
        const newIssueRecord=await issueRecordService.addIssueRecord(issueRecord);
        return res.status(201).send(newIssueRecord);
    }
    catch(err){
        console.error(err);
        switch(true){
            case err instanceof DuplicateIssueException:
                return res.status(147).send({message:err.message});
            case err instanceof BookUnavailableException:
                return res.status(404).send({message: err.message});
            default :
            return res.status(500).send({
                message:"Adding new Issue Record failder",
            });
        }
        
    }
}

const getIssueRecordById= async (req,res)=>{
    try{
        const { issueRecordId }=req.params;
        const issueRecord=await issueRecordService.getIssueRecordById(issueRecordId);
        if(!issueRecord){
            return res.status(404).send({
                message:`Issue Record with Id : ${issueRecord} doesnt exist.`,
            })
        }
        return res.status(200).send(issueRecord);
    }catch(err){
        console.error(err);
        return res.status(500).send({
            message: "An Internal Server Error occured",
        });
    }
};

const getIssueRecordsByFilters=async (req,res)=>{
    try{
        const filters={...req.body};
        const issueRecordList=await issueRecordService.getIssueRecordsByfilters(
            filters
        );
        return res.status(500).send(issueRecordList);
    }
    catch(err){
        console.error(err);
        return res.status(500).send({
            message:" An Internal Server Error occured",
        })
    }
}

const updateIssueRecord=async (req,res)=>{
    try{
        const issueRecord ={...req.body};
        const wasUpdated=await issueRecordService.updateIssueRecord(issueRecord);
        if(!wasUpdated){
            return res.status(404).send({
                message:`Update Failed ! Issue Record with ID : ${issueRecord.id} doesnt exist`,
            });
        }
        return res.status(200).send({
            message:`Update Sucess ! Issue Record with ID:${issueRecord.id} was updated`
        })
    }
        catch (err) {
            console.error(err);
            return res.status(500).send({
              message: "An Internal Server Error occurred",
            });
    }

}

const deleteissueRecord=async(req,res)=>{
    try{
        const {issueRecord}=req.params;
        const wasDeleted=await issueRecordService.deleteIssueRecord(issueRecord);
        if(!wasDeleted){
            return res.status(404).send({
                message:`Delete Failed! Issue Record with ID: ${issueRecord.id} doesn't exist`,
            });
        }
        return res.status(200).send({
            message: `Delete Success! Issue Record with ID: ${issueRecord.id} was deleted.`,
        })
    }
    catch (err) {
        console.error(err);
        return res.status(500).send({
          message: "An Internal Server Error occurred",
        });
      }
}
const getLateFine =async (req,res)=>{
    try{
        const { issueRecordId }=req.params;
        const lateFine =await issueRecordService.getLateFine(issueRecordId);
        if(!lateFine){
            return res.status(404).send({
                message:`Issue Record with ID:${issueRecordId} doesnt exist`,
            })
        }
        return res.status(200).send({lateFine});
    }
    catch(err){
        console.error(err);
        return res.status(500).send({
            message:"An Internal Server Error occured",
        })
    }
}

const submitBook=async ( req,res)=>{
    try{
        const {issueRecordId}=req.params;
        const lateFine=await issueRecordService.submitBook(issueRecordId);
        if(lateFine==false){
            return res.status(417).send({
                message:"Could not submit book",
            });
        }
        return res.status(200).send({
            lateFine,
            message:"Submission Successful",
        });
    }
    catch(err){
        const message=err.message;
        switch(true){
            case err instanceof NotFoundException:
                return res.status(404).send({message});
            default:
                return res.status(500).send({
                    message:"An Internal Server Error occurred",
                })
        }
    }
}
module.exports={
    addIssueRecord,
    updateIssueRecord,
    deleteissueRecord,
    getIssueRecordById,
    getIssueRecordsByFilters,
    getLateFine,
    submitBook,

}