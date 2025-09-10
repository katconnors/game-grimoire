import { useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./Components/list";
import "./App.css";

// https://builtin.com/articles/react-search-bar

function App() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e: any) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  // TODO: add submit button
  // TODO: change to on submit instead because other filters will need to be applied
  return (
    <div className="main">
      <h1>Game Grimoire</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputText} />
    </div>
  );
}

export default App;
