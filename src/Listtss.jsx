import React from "react";

function Listtss() {
  var listData = [
    {
      name: "Apple",
      quantity: 67,
    },
    {
      name: "Mango",
      quantity: 645,
    },
    {
      name: "Pineapple",
      quantity: 45,
    },
    {
      name: "Curilflower",
      quantity: 34,
    },
  ];

  var anabData = [
    {
      name: "Apple",
      data: ["seb", "santara", , "mausambi"],
    },
    {
      name: "Mango",
      data: ["jeb", "katra", "maidan"],
    },
    {
      name: "Pineapple",
      data: ["hum", "tum", "sushmita"],
    },
    {
      name: "Curilflower",
      data: ["open", "main", "door"],
    },
  ];

  return (
    <div>
      <p> this is a map function</p>

      {listData.map((item, index) => {
        return (
          <div>
            <p key="index">{item.name}</p>
            <p>{item.quantity}</p>
          </div>
        );
      })}

      {anabData.map((item, index) => {
        return (
          <div>
            <p>{item.name}</p>
            <div>
              {item.data.map((fruit, index) => {
                return <p key={index}>{fruit}</p>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Listtss;
