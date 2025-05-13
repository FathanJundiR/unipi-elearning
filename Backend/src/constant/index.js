const API_ERROR_MESSAGE = {
  loginError: "Invalid NIK/NPM or Password",
  unauthorized: "Please login first",
  forbidden: "You don't have any access",
  notFound: "Data not found",
  userAlreadyExist: "User with that NIK / NPM already created!",
};

const API_SUCCESS_MESSAGE = {
  loginSuccess: "Login success",
  createdUser: "User created successfully",
  createdManyUser: "Users created successfully",
  updatedUser: "User updated sucessfully",
};

module.exports = { API_ERROR_MESSAGE, API_SUCCESS_MESSAGE };
