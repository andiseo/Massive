const express = require('express');
const router = express.Router();
const PartnerController = require('../controller/partners')

//CREATE - POST
router.post('/', PartnerController.createNewPartner )
//READ - GET
router.get('/', PartnerController.getAllPartners )

module.exports = router;
