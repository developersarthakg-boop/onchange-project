import React, { useState } from "react";

function FormsData() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div>
      <label>Name: </label>
      <input
        type="text"
        placeholder="Enter the name"
        name="name"
        value={data.name}
        onChange={handleChange}
      ></input>
      <label>Email: </label>
      <input
        type="email"
        placeholder="Enter the name"
        name="email"
        value={data.email}
        onChange={handleChange}
      ></input>
      <label>Password: </label>
      <input
        type="password"
        placeholder="Enter the name"
        name="password"
        value={data.password}
        onChange={handleChange}
      ></input>

      <p>
        The name is {data.name} and the email is {data.email} and the password
        is {data.password}
      </p>
    </div>
  );
}

export default FormsData;
