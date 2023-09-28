import { API_URL } from "@/config/config";
import axios from "axios";

const verifyIsAuthReady = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/users/findUserByIdWithCookie/${userId}`);
    return response.data;
  } catch (error) {
    throw error; // Propaga el error hacia arriba para que pueda ser manejado por el código que llama a esta función
  }
};

export default verifyIsAuthReady;
