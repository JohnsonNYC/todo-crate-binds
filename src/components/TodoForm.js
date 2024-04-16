import React, { useState } from "react";
import styled from "styled-components";

const TodoForm = ({ addItem }) => {
  const [itemText, setItemText] = useState("");

  const handleInputChange = (e) => {
    const newVal = e.target.value;
    setItemText(newVal);
  };

  const clearText = () => {
    setItemText("");
  };

  return (
    <form onSubmit={(e) => addItem(e, itemText, clearText)}>
      <Input
        value={itemText}
        placeholder="Item A"
        onChange={handleInputChange}
      />
      <Add onClick={(e) => addItem(e, itemText, clearText)}>+</Add>
    </form>
  );
};

export default TodoForm;

const Add = styled.button`
  border: 1px solid #e9e9e9;
  height: 25px;
  border-radius: 6px;

  background: unset;
  margin-left: 10px;
`;

const Input = styled.input`
  border: 1px solid #e9e9e9;
  border-radius: 6px;
  height: 25px;
`;
