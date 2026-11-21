import { useState } from "react";
import { useNavigate } from "react-router";

function SearchOrder() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        placeholder="Search Order #"
        onChange={(e) => setQuery(e.target.value)}
        className="bg-white p-1"
      />
    </form>
  );
}

export default SearchOrder;
