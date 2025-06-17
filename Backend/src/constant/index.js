const API_ERROR_MESSAGE = {
  loginError: "Invalid NIK/NPM or Password",
  unauthorized: "Please login first",
  forbidden: "You don't have any access",
  notFound: "Data not found",
  userAlreadyExist: "User with that NIK / NPM already exist!",
  jadwalMahasiswaExist: "Jadwal Mahasiswa already exist!",
};

const API_SUCCESS_MESSAGE = {
  fetched: (title) => `${title} fetched successfully`,
  created: (title) => `${title} created successfully`,
  updated: (title) => `${title} updated successfully`,
  deleted: (title) => `${title} deleted successfully`,
};

module.exports = { API_ERROR_MESSAGE, API_SUCCESS_MESSAGE };
