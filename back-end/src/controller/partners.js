const partnerModel = require('../models/partners')

const createNewPartner = async (req, res) => {
  const {body} = req;
  try {
    await partnerModel.createNewPartner(body);
    res.json({
      message: 'Create New Partner Success',
      data: body
    })
  } catch (error) {
    res.status(500).json({
      message: 'error get',
      serverMessage: error,
    })
  }
}

const getAllPartners = async (req, res) => {
  try {
    const [data] = await partnerModel.getAllPartners(); 
    res.json({
      // message: 'Get All Partner Success',
      data: data
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error getting partners',
      error: error.message 
    });
  }
};

module.exports = {
  getAllPartners,
  createNewPartner,
}