import React from "react";
import styled from "styled-components";
import "animate.css";

const TodoItem = ({ item, positionIndex, removeItem, markAsComplete }) => {
  const { title, completed } = item;

  return (
    <Wrapper className={`animate__animated animate__fadeInDown`}>
      <X onClick={() => removeItem(positionIndex)}>X</X>
      <Text isComplete={completed}>{title}</Text>
      <Complete onClick={() => markAsComplete(positionIndex)}>
        {completed ? "Incomplete" : "Complete"}
      </Complete>
    </Wrapper>
  );
};

export default TodoItem;

const Complete = styled.button`
  border: 1px solid #8373dc;
  border-radius: 6px;
  background: unset;
  cursor: pointer;
  color: #8373dc;
`;
const X = styled.button`
  border: unset;
  margin-right: 5px;
  background: unset;
  cursor: pointer;
  color: red;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  max-width: 400px;
  width: 100%;
`;

const Text = styled.div`
  margin-right: 20px;
  color: ${(props) => (props.isComplete ? `green` : "black")};
  text-decoration: ${(props) =>
    props.isComplete ? `line-through` : "inherit"};
`;
