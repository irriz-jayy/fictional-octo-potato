import { useEffect, useState } from "react";

function useUser(token) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (token) {
      fetch("http://127.0.0.1:3000/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to fetch user data");
          }
        })
        .then((userData) => {
          setUser(userData);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [token]);

  return user;
}

export default useUser;
