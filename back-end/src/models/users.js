const dbPool = require('../config/database')

const getAllUsers = () => {
  const SQLQuery = 'SELECT * FROM users';

  return dbPool.execute(SQLQuery)
}

const getCheckUsers = (username, password) => {
  const SQLQuery = 'SELECT username, password FROM users WHERE username = ? AND password = ?';
  const values = [username, password];

  return dbPool.execute(SQLQuery, values);
};

const createNewUser = (body) => {
  const SQLQuery = `INSERT INTO users (name, email, contact, username, password) 
                    VALUES ('${body.name}', '${body.email}', '${body.contact}', '${body.username}', '${body.password}')`;
  return dbPool.execute(SQLQuery);
}

module.exports = {
  getAllUsers,
  createNewUser,
  getCheckUsers
}