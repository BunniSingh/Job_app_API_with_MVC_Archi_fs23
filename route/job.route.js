const express = require("express");

const router = express.Router();

const {
  jobCreate,
  jobList,
  jobEdit,
  jobDelete,
} = require("../controller/job.controller");

router.post("/create", jobCreate);
router.get("/list", jobList);
router.patch("/edit", jobEdit);
router.delete("/delete", jobDelete);

module.exports = router;
