import { initiateSocketConnection } from "./socketHelper";

  function isLoggedIn(){
  return JSON.parse(localStorage.getItem("user"));
};

  function loginUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
  initiateSocketConnection();
};

  function logoutUser() {
  localStorage.removeItem("user");
  initiateSocketConnection();
};

export { loginUser, isLoggedIn, logoutUser };
