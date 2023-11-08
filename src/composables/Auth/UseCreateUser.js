import { API_URL } from "@/config/config";
import axios from "axios";

const createUser = async (email, password, userName, userLastName, userDescription) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`${API_URL}/users/create`, {
                roleId: 2,
                userDescription: userDescription.value,
                userEmail: email.value,
                userLastName: userLastName.value,
                userName: userName.value,
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

export default createUser;
