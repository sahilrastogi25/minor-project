import Heading from "./Heading";
import SearchBox from "./SearchBox";
import { useState } from "react";
function Main() {
  const [searchVal, setSearchVal] = useState("");
  return (
    <div className="container-fluid">
      <Heading />
      <SearchBox searchVal={searchVal} setSearchVal={setSearchVal} />
    </div>
  );
}
export default Main;
