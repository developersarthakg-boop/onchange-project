import React, { useState } from "react";

function SelectanndChecked() {
  const [gender, setGender] = useState("male");
  const [subscribed, setSubscribed] = useState();
  return (
    <div>
      <label>Select your gender</label>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input
        type="checkbox"
        checked={subscribed}
        onChange={(e) => setSubscribed(e.target.value)}
      ></input>
    </div>
  );
}

export default SelectanndChecked;
