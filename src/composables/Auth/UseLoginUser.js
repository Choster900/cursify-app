import { API_URL } from "@/config/config";
import axios from "axios";

/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns Objeto con la informacion del usuario para manejarla con vuex
 */
const loginUser = async (email, password) => {
    console.log({email,password});
    return new Promise((resolve, reject) => {
        axios
            .post(`${API_URL}/users/login`, {
                userEmail: email.value,
                userPassword: password.value,
            })
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                reject({ error });
            });
    });
};

export default loginUser;