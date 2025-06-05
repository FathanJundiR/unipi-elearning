import axios, { AxiosError } from "axios";
import { EnvService } from "./EnvService";
import GenService from "./GenService";

const ApiUrl = EnvService.envUrl();

async function login(userData: any, setLoading: any) {
  try {
    let { data } = await axios.post(`${ApiUrl}/login`, userData);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data.message;
      GenService.alertError(errorMessage);
    }
    setLoading(false);
  }
}

async function logout() {
  localStorage.clear();
  GenService.alertSuccess("Sign Out Success");
}

export const ApiServices = {
  login,
  logout,
};
