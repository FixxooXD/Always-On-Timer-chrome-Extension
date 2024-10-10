import { useState } from "react";
import TextField from "@mui/material/TextField";
export function Settings({ saveTargetDate, setSettingsClicked }) {
  const [inputDate, setInputDate] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    saveTargetDate(inputDate);
    setSettingsClicked(false);
  };
  return (
    <>
      <div>
        <h1>Settings</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            id="date"
            label="Select Target Date"
            type="date"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
