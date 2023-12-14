const dbPool = require('../config/database')

const getAllUsers = () => {
  const SQLQuery = 'SELECT * FROM users';

  return dbPool.execute(SQLQuery)
}

const createNewUser = (body) => {
  const SQLQuery = `INSERT INTO users (name, email, contact, username, password) 
                    VALUES ('${body.name}', '${body.email}', '${body.contact}', '${body.username}', '${body.password}')`;
  return dbPool.execute(SQLQuery);
}

module.exports = {
  getAllUsers,
  createNewUser
}