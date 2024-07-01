const { isObjectIdOrHexString } = require("mongoose");
const issueRecordModel =require('../models/IssuedRecord');


const addIssueRecord=async(issueRecordInfo)=>{
    try{
        const issueRecord=await new issueRecordModel(issueRecordInfo).save();
        console.info("Sucessfully saved now issue record");
        return issueRecord;
    }
    catch(err){
        console.err("Creation of issue record failed",err);
        return null;
    }
};

const getIssueRecordById=async(issueRecordId)=>{
    try{
        const issueRecord=await issueRecordModel.findOne({_id:issueRecord});
        if(!issueRecord){
            console.info(`No issue record was found for ID:${issueRecordId}`)
        }else{
            console.info(
                `Issue record with ID :${issueRecordId} was successfull `
            )
        }
        return issueRecord;
    }
    catch(err){
        console.error(
            `Error in finding issue record with ID: ${issueRecordId}`,
            err
          );
          throw err;
    };
    
}

const updateIssueRecord=async(issueRecord)=>{
    try{
        const updateResult=await issueRecordModel.updateOne(
            
                {_id:issueRecord.id},
                { $set:{...issueRecord}}
            
        );
        if(!updateResult.matchedcount){
            console.info(
                `Update Failed! Issue Record with ID: ${issueRecord.id} doesn't exist`
              );
              return false;
        }
        console.info(
            `Update Success! Issue Record with ID: ${issueRecord.id} was updated`
          );
          return true;
    }catch(err){
        console.error(`Update Failed!`, err);
    throw err;
    }
}

const deleteIssueRecord=async(issueRecord)=>{
    try{
        const deleteResult=await issueRecordModel.deleteOne(
            { _id :issueRecord.id}
        );
        if (!deleteResult.matchedCount) {
            console.info(
              `Delete Failed! Issue Record with ID: ${issueRecord.id} doesn't exist`
            );
            return false;
        }
        console.info(
            `Delete Success! Issue Record with ID: ${issueRecord.id} was deleted`
          );
          return true;
    }
    catch(err){
        console.error(`Delete Failed!`, err);
        throw err;
    }
}

const getIssueRecordByFilters=async (filterObject)=>{
    try {
        let queryObject = {};
        if (filterObject.studentRegNo) {
          queryObject.studentRegNo = filterObject.studentRegNo; //  {studentRegNo: 100, bookIsbnNo: 200}
        }
        if (filterObject.bookIsbnNo) {
          queryObject.bookIsbnNo = filterObject.bookIsbnNo;
        }
        if (filterObject.startDate) {
          // TODO:
          // Some query with the help of which we can get objects whose issue date is after the given start date
        }
        if (filterObject.endDate) {
          // TODO:
          // Some query with the help of which we can get objects whose issue date is before the given end date
        }
        const issueRecordList = await IssueRecordModel.find(queryObject);
        console.info(`Found ${issueRecordList.length} records by filters`);
        return issueRecordList;
      } catch (err) {
        console.error(err);
        throw err;
      }
}



module.exports={
    deleteIssueRecord,
    addIssueRecord,
    updateIssueRecord,
    getIssueRecordById,
    getIssueRecordByFilters,
}