import React, { useEffect, useState } from "react";
import "./SnippetCard.css";
import parse from "html-react-parser";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function SnippetCard({ snippet, userSnippets }) {
  const { token, addSnippet } = useAuth();
  const [addButtonText, setAddButtonText] = useState("");
  const [loadingText, setLoadingText] = useState(false);
  const location = useLocation();
  const url = location.pathname;
  console.log(userSnippets);
  // console.log(url);
  useEffect(() => {
    if (token) {
      const found =
        userSnippets &&
        userSnippets.some((el) => {
          return el._id === snippet._id;
        });

      if (found) {
        setAddButtonText("Added");
      } else {
        setAddButtonText("Add to your snippets");
      }
    }
  }, [snippet]);

  const handleAddSnippet = async (e) => {
    e.preventDefault();
    setLoadingText(true);
    try {
      await addSnippet(snippet._id);
    } catch (err) {
      console.log(err);
      alert("Cannot add");
    }
    setLoadingText(false);
    setAddButtonText("Added");
  };

  return (
    <div className="snippet_card">
      <div className="snippet_card_header">
        <div>
          <h3>{snippet.title}</h3>
        </div>
        <div>
          <button className="source_link">
            <a
              href={snippet.source}
              target="__blank"
              style={{ textDecoration: "none" }}
            >
              View Source
            </a>
          </button>
          {token && url !== "/dashboard/mysnippets" ? (
            <button
              className="add_snippet_button"
              onClick={handleAddSnippet}
              disabled={addButtonText === "Added"}
            >
              {loadingText ? <p>Adding...</p> : <p>{addButtonText}</p>}
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="snippet_card_content">{parse(snippet.code)}</div>
    </div>
  );
}

export default SnippetCard;
