import React, { useState, useEffect } from "react";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = async (username, password) => {
    try {
      const credentials = {
        user: {
          username: username,
          password: password,
        },
      };

      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.error || "Invalid username or password";
        throw new Error(errorMessage);
      }

      const data = await response.json();
      const { user, jwt } = data;

      localStorage.setItem("token", jwt);

      setUser(user);
      return { user, token: jwt };
    } catch (error) {
      console.log("Login error:", error);
      throw error;
    }
  };
  const signup = async (
    name,
    email,
    username,
    password,
    profile_picture_url
  ) => {
    try {
      const userData = {
        user: {
          name: name,
          email: email,
          username: username,
          password: password,
          profile_picture_url: profile_picture_url,
        },
      };

      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Sign up failed");
      }

      const data = await response.json();
      const { user, jwt } = data;

      // Store the token securely (e.g., in cookies or local storage)
      localStorage.setItem("token", jwt);

      setUser(user);
      return user; // Return the user data
    } catch (error) {
      console.log("Signup error:", error);
      throw error;
    }
  };

  const logout = () => {
    console.log("logged out");
    // Perform logout logic, such as clearing the stored token
  };

  const authContextValue = {
    user,
    token,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
