const express=require("express");
const router =express.Router();
const issueRecordController=require("../controllers/issueRecord.controller");

router.get('/:issueRecordId',issueRecordController.getIssueRecordById);
router.delete("/:issueRecordId",issueRecordController.deleteissueRecord);
router.get("/filter",issueRecordController.getIssueRecordsByFilters);
router.post("/add",issueRecordController.addIssueRecord);
router.put("/",issueRecordController.updateIssueRecord);
router.get("/late-fine/:issueRecordId",issueRecordController.getLateFine);
module.exports=router;