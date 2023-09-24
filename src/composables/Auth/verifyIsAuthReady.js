import axios from "axios";

const verifyIsAuthReady = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:8080/v1/users/findUserByIdWithCookie/${userId}`);
    return response.data;
  } catch (error) {
    throw error; // Propaga el error hacia arriba para que pueda ser manejado por el código que llama a esta función
  }
};

export default verifyIsAuthReady;
