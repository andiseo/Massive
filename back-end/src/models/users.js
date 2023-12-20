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

const createOrder = (body) => {
  const SQLQuery = `INSERT INTO swiftmove.order (idUser, idMitra, name, contact, pickAddress, dropAddress, date, status)
                    VALUES ('${body.idUser}', '${body.idMitra}', '${body.name}', '${body.contact}', '${body.pickAddress}', '${body.dropAddress}', '${body.date}', '${body.status}')`;
  return dbPool.execute(SQLQuery);
}

module.exports = {
  getAllUsers,
  createNewUser,
  getCheckUsers,
  createOrder
}