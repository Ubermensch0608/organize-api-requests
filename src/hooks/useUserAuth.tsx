import { useEffect, useState } from "react";

import MswApi from "src/apis/MswApi";

const useUserAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginUser = async () => {
    try {
      const res = await MswApi.post("/login");
      console.log(res);

      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  const logoutUser = async () => {
    await MswApi.post("/logout");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("is-authenticated") === "true");
  }, []);

  return { isLoggedIn, onLogin: loginUser, onLogout: logoutUser };
};

export default useUserAuth;
