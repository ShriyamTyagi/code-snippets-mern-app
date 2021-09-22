import React, { useState } from "react";
import SnippetCard from "./SnippetCard";
import Pagination from "./Pagination";

function Snippets({ snippets, userSnippets }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [snippetsPerPage] = useState(10);

  const indexOfLastSnippet = currentPage * snippetsPerPage;
  const indexOfFirstSnippet = indexOfLastSnippet - snippetsPerPage;
  const currentSnippets = snippets.slice(
    indexOfFirstSnippet,
    indexOfLastSnippet
  );
  const paginate = (number) => {
    setCurrentPage(number);
  };
  return (
    <div>
      {currentSnippets.map((snippet) => (
        <SnippetCard snippet={snippet} userSnippets={userSnippets} />
      ))}
      <Pagination
        snippetsPerPage={snippetsPerPage}
        totalSnippets={snippets.length}
        paginate={paginate}
      />
      )
    </div>
  );
}

export default Snippets;
