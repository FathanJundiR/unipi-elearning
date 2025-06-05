const API_ERROR_MESSAGE = {
  loginError: "Invalid NIK/NPM or Password",
  unauthorized: "Please login first",
  forbidden: "You don't have any access",
  notFound: "Data not found",
  userAlreadyExist: "User with that NIK / NPM already created!",
};

const API_SUCCESS_MESSAGE = {
  loginSuccess: "Login success",
  fetchedUser: "User fetched successfully",
  createdUser: "User created successfully",
  createdManyUser: "Users created successfully",
  updatedUser: "User updated sucessfully",
  fetchedKelas: "Kelas fetched successfully",
  createdKelas: "Kelas created successfully",
  updatedKelas: "Kelas updated successfully",
  fetchedTahunAjaran: "Tahun Ajaran fetched successfully",
  createdTahunAjaran: "Tahun Ajaran created successfully",
  updatedTahunAjaran: "Tahun Ajaran updated successfully",
};

module.exports = { API_ERROR_MESSAGE, API_SUCCESS_MESSAGE };
