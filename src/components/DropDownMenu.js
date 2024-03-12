import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ options, selected, onSelectedChangr }) => {
  const ref = useRef();
  useEffect(() => {
    const bodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", bodyClick);

    return () => {
      document.body.removeEventListener("click", bodyClick);
    };
  }, []);

  const [open, setOpen] = useState(false);
  const rendredOptions = options.map((option) => {
    if (option.lable === selected.lable) {
      return null;
    }
    return (
      <div
        className="item"
        key={option.value}
        onClick={() => onSelectedChangr(option)}
      >
        {option.lable}
      </div>
    );
  });
  return (
    <div
      className={`ui selection dropdown ${open && "visible active"}`}
      onClick={() => setOpen(!open)}
      ref={ref}
    >
      <i className="dropdown icon"></i>
      <div className="default text">{selected.lable}</div>
      <div className={`menu ${open && "visible transition"}`}>
        {rendredOptions}
      </div>
    </div>
  );
};

export default Dropdown;
