import React from "react";

function Conditionalcheck() {
  const isLogin = false;

  const checkLogin = () => {
    if (isLogin) {
      return <p>Hello World this is sarthak</p>;
    } else {
      return <p>This is false</p>;
    }
  };

  return <div>{checkLogin()}</div>;
}

export default Conditionalcheck;
