import axios from "axios";
import { useEffect, useState } from "react";

const useUserAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginUser = async () => {
    try {
      await axios.post("/login");
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  const logoutUser = async () => {
    await axios.post("/logout");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("is-authenticated") === "true");
  }, []);

  return { isLoggedIn, onLogin: loginUser, onLogout: logoutUser };
};

export default useUserAuth;
