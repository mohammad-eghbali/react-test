import React, { useState } from "react";
import Container from "react-bootstrap/Container";

import AddInput from "./AddInput/AddInput";
import TodoList from "./TodoList/TodoList";

function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="todo">
      <Container>
        <AddInput setTodos={setTodos} todos={todos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </Container>
    </div>
  );
}

export default Todo;
