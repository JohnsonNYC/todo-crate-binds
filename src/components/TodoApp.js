import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import styled from "styled-components";

//TODO: Input should add Item to Todo List √
//TODO: Clicking On Complete should cross out item and make it green √
//TODO: Clicking on the X should remove the item from the list √

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const addItem = (e, passedItemText, callback) => {
    e.preventDefault();

    if (!passedItemText || !passedItemText.length) {
      setErrorMessage("Please add an item");

      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
      return;
    }

    const item = { title: passedItemText, completed: false };

    // Ahh - I was updating state directly within the actual assessment. It's the nerves!
    const listCopy = [...todoList];

    listCopy.push(item);
    setTodoList(listCopy);

    if (callback) callback();
  };

  const removeItem = (indexToRemove) => {
    const listCopy = [...todoList];
    listCopy.splice(indexToRemove, 1);

    setTodoList(listCopy);
  };

  const markAsComplete = (indexPosition) => {
    const listCopy = [...todoList];

    const item = listCopy[indexPosition];

    if (item.completed) {
      item.completed = false;
    } else {
      item.completed = true;
    }

    setTodoList(listCopy);
  };

  return (
    <Container>
      <Wrapper>
        <Title>For CrateBind and Lifeway - by Johnson</Title>
        <TodoForm
          todoList={todoList}
          setTodoList={setTodoList}
          addItem={addItem}
        />
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        {todoList.length
          ? todoList.map((item, i) => (
              <TodoItem
                key={i}
                item={item}
                positionIndex={i}
                removeItem={removeItem}
                markAsComplete={markAsComplete}
              />
            ))
          : null}
      </Wrapper>
    </Container>
  );
};

export default TodoApp;

const Title = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ErrorText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: red;
`;
