import { useRef, useState, useEffect } from "react";

const useFetch = async (username, password, url) => {
  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: username, password: password }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.status === "User not logged in") {
          alert("Usuario o contraseña incorrectos");
          return;
        }
        if (isMounted.current) {
          localStorage.setItem("user", JSON.stringify(user));
          setState({ loading: false, data: user, error: null });
        }
      })
      .catch((error) => {
        setState({
          data: null,
          loading: false,
          error: "problems with the url petition",
        });
      });
  }, [url, username, password]);

  return state;
};

export default useFetch;
