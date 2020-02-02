import React from "react";
import { View } from "react-native";
import TodoHeader from "./comp/header";
import AddTodo from "./comp/addTodo";
import TodoViewer from "./comp/todoViewer";

const Todo = () => {
  const [todos, setTodos] = React.useState(["Shopping", "Reading", "Cleaning"]);
  const addTodos = todo => {
    todos.includes(todo)
      ? null
      : setTodos(prevTodos => {
          return [...prevTodos, todo];
        });
  };
  const delTodo = todo => {
    setTodos(prevTodos => prevTodos.filter(t => t !== todo));
  };
  // console.log(todos);
  return (
    <View
      style={{
        flex: 1
      }}
    >
      <TodoHeader />
      <AddTodo add={addTodos} />
      <TodoViewer todoList={todos} delTodo={delTodo} />
    </View>
  );
};

export default Todo;
