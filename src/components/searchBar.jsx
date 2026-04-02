const SurgerySearch = ({ searchTerm, handleSearch }) => {
  return (
    <form className="search">
      <input
        className="form-control search-input"
        type="search"
        placeholder="Search for names..."
        title="Type in a name"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  );
};

export default SurgerySearch;
