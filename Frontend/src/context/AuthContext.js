import React, { useContext, useState } from "react";
import axios from "axios";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("user")) || {}
  );
  const [token, setToken] = useState(
    window.localStorage.getItem("token") || ""
  );

  const signup = (userInfo) => {
    console.log(userInfo);
    return axios
      .post(
        "https://code-snippet-mern-app.herokuapp.com/api/user/signup",
        userInfo
      )
      .then((response) => {
        console.log(response);
        const { token, user } = response.data;
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        setToken(token);
        // forward the response, just in case
        // it's needed down the promise chain
        return response;
      });
  };

  const login = (credentials) => {
    return axios
      .post(
        "https://code-snippet-mern-app.herokuapp.com/api/user/login",
        credentials
      )
      .then((response) => {
        const { token, user } = response.data;
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("user", JSON.stringify(user));
        console.log(user.codeSnippets);
        setUser(user);
        setToken(token);

        return response;
      });
  };

  const logout = () => {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("mySnippets");
    setUser({});
    setToken("");
  };

  const addSnippet = (snippet_id) => {
    return axios
      .get(
        `https://code-snippet-mern-app.herokuapp.com/api/user/addsnippet/${snippet_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        return response;
      });
  };

  const value = {
    login,
    signup,
    logout,
    user,
    token,
    addSnippet,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
