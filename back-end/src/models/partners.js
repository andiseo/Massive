const dbPool = require('../config/database')

const getAllPartners = () => {
  const SQLQuery = 'SELECT * FROM partners';

  return dbPool.execute(SQLQuery)
}

const createNewPartner = (body) => {
  const SQLQuery = `INSERT INTO partners (name, description, service, price, loc) 
                    VALUES ('${body.name}', '${body.description}', '${body.service}', '${body.price}', '${body.loc}')`;
  return dbPool.execute(SQLQuery);
}

module.exports = {
  getAllPartners,
  createNewPartner
}