const Search = ({ onSearch, text, onTextChange }) => {
  const submit = () => {
    onSearch(text);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search by Model, Make, or Year"
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            submit();
          }
        }}
      />
      <div className="search__btn--wrapper" onClick={submit}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </>
  );
};

export default Search;
