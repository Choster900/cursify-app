import axios from "axios";

const loginUser = async (email, password) => {
  //return {email:email.value, password:password.value};
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:8080/v1/users/login", {
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
