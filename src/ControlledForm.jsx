import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}, password: ${password}`);
    // Handle form submission logic here
  };
  return (
    <div>
      <p>Controlled Component Form</p>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>{" "}
        <input
          type="text"
          placeholder="Enter the name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <br></br>
        <label>Email: </label>{" "}
        <input
          type="email"
          placeholder="Enter the email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <br></br>
        <label>Password: </label>{" "}
        <input
          type="password"
          placeholder="Enter the password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
        <button
          type="reset"
          onClick={() => {
            setName("");
            setEmail("");
            setPassword("");
          }}
        >
          Reset
        </button>
        <p>
          {name}
          {email}
          {password}
        </p>
      </form>
    </div>
  );
}

export default ControlledForm;
