import { API_URL } from "@/config/config";
import axios from "axios";

const loginUser = async (email, password) => {
    //return {email:email.value, password:password.value};
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
