import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import Snippets from "./Snippets";
function MySnippets() {
  const [current_snippets, setCurrentSnippets] = useState([]);
  const [loadingCurrentSnippets, setLoadingCurrentSnippets] = useState(false);
  const { token } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setLoadingCurrentSnippets(true);
      const response = await axios.get(
        `https://code-snippet-mern-app.herokuapp.com/api/user/getsnippets`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCurrentSnippets(response.data.data);
      setLoadingCurrentSnippets(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      {loadingCurrentSnippets ? (
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      ) : (
        <Snippets query="" snippets={current_snippets} />
      )}
    </div>
  );
}

export default MySnippets;
