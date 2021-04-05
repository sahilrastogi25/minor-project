import Heading from "./Heading";
import SearchBox from "./SearchBox";
import { useState } from "react";
function App() {
  const [searchVal, setSearchVal] = useState("");
  return (
    <div className="container-fluid">
      <Heading />
      <SearchBox searchVal={searchVal} setSearchVal={setSearchVal} />
    </div>
  );
}

export default App;
