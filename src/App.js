import "tachyons";
import { robots } from "./robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <h3>{search}</h3>
      <SearchBox search={search} setSearch={setSearch} />
      <CardList search={search} robots={robots} />
    </div>
  );
}

export default App;
