import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Snippets from "./components/Snippets";
import axios from "axios";
import { useAuth } from "./context/AuthContext";

function App() {
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [snippets, setSnippets] = useState([]);
  const [userSnippets, setUserSnippets] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();
  console.log(token);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const resp = await axios.get(
        `https://code-snippet-mern-app.herokuapp.com/api/codesnippet`
      );
      setSnippets(resp.data);

      if (token) {
        const response = await axios.get(
          `https://code-snippet-mern-app.herokuapp.com/api/user/getsnippets`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        setUserSnippets(response.data.data);
      }
      let res = [];
      if (query === "") {
        setSnippets(resp.data);
      } else {
        res = resp.data.filter((snippet) => {
          return snippet.title.includes(query) || snippet.code.includes(query);
        });
        setSnippets(res);
      }
      setLoading(false);
    };
    fetchData();
  }, [query]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setQuery(text);
  };

  // Current Snippets

  return (
    <div className="App">
      <Navbar />
      <SearchBar handleChange={handleChange} handleClick={handleClick} />
      {loading ? (
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      ) : (
        <Snippets
          query={query}
          snippets={snippets}
          userSnippets={userSnippets}
        />
      )}
    </div>
  );
}

export default App;
