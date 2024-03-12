import React, { useState } from "react";
import './Menu.css'
import Dropdown from "./DropDownMenu";

const options = [
  {
    lable: "Beach Hotel Unawatuna   ",
    value: "red"
  },

  {
    lable: "Beach Hotel Hikkaduwa   ",
    value: "green"
  },

  {
    lable: "Hotel de Ceylon Colombo",
    value: "blue"
  }
];

export default function Menu() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="menu">
      <div className="ui-container">
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChangr={setSelected}
        />
      </div>
    </div>
  );
}
