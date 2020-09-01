
const express = require('express');
const router = express.Router();
const commController = require('./comm.controller');

router.head('/server', commController.server);
router.head('/docker', commController.docker);

module.exports = router;