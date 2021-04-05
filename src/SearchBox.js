function SearchBox(props) {
  return (
    <div className="search form-group">
      <label htmlFor="inputlg">
        <h3>Enter the complete url of the website:</h3>
      </label>
      <input
        type="text"
        id="inputlg"
        className="form-control input-lg"
        value={props.searchVal}
        onChange={(e) => {
          props.setSearchVal(e.target.value);
        }}
        placeholder="type to enter"
      />
      <button
        type="submit"
        className="d-flex mt-4 justify-content-center align-items-center btn btn-large btn-primary"
      >
        Submit
      </button>
    </div>
  );
}
export default SearchBox;
