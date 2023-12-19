const usersModel = require('../models/users')

const createNewUsers = async (req, res) => {
  const {body} = req;
  try{
    await usersModel.createNewUser(body);
    res.json({
      message : 'Create New User Success',
      data: body
    })
  } catch (error) {
    res.status(500).json({
      message: 'error get',
      serverMessage: error,
    })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const [data] = await usersModel.getAllUsers();
    res.json({
      message : 'Get All User Success',
      data: data
    })
  } catch (error) {
    res.status(500).json({
      message: 'error get',
      serverMessage: error,
    })
  }
}

const getCheckUsers = async (req, res) => {
  const { username, password } = req.query;

  try {
    if (!username || !password) {
      return res.status(400).json({
        message: 'Username and password must be provided.',
      });
    }

    const result = await usersModel.getCheckUsers(username, password);

    if (result.length > 0 && result[0]!='') {
      res.json({
        message: 'Login Successful',
        data: result[0],
      });
    } else {
      res.status(401).json({
        message: 'Login Failed. Invalid username or password.',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error during login',
      serverMessage: error.message,
    });
  }
};

const updateUsers = (req, res) => {
  const {idUser} = req.params;
  console.log('idUser :', idUser);
  res.json({
    message : 'Update User Success',
    data: req.body,
  })
}

const deleteUser = (req, res) => {
  const {idUser} = req.params;
  res.json({
    message: 'Delete User Success',
    data: {
      id: idUser,
      nama: "andi",
      email: "andiseyo50@gmail.com"
    }
  });
}

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUsers,
  deleteUser,
  getCheckUsers,
}