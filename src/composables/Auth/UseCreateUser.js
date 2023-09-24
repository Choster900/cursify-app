import axios from "axios";

const createUser = async (email, password) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:8080/v1/users/create", {
        roleId: 1,
        userEmail: email.value,
        userLastName: "string",
        userName: "string",
        userPassword: password.value,
      })
      .then(response => {
        resolve({ response });
      })
      .catch(error => {
        reject({ error });
      });
  });
};

export default createUser;
