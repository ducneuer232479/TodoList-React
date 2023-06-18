import { useState } from "react";
import FormAdd from "./FormAdd";
import ListItem from "./ListItem";
import data from "./data";

function TodoList() {
  const [todoList, setTodoList] = useState(data);
  const [classButton, setClassButton] = useState("addBtn");
  const [contentButton, setContentButton] = useState("Add");
  const [currentTask, setCurrentTask] = useState("");
  const [currentId, setCurrentId] = useState(0);

  function renderList() {
    const listItem = todoList.map(function (todo) {
      return (
        <ListItem
          id={todo.id}
          task={todo.task}
          key={todo.task}
          deleteTask={deleteTask}
          dataNeededUpdate={dataNeededUpdate}
        />
      );
    });
    return listItem;
  }

  function addNewTask(newTask) {
    if (!newTask) return;
    const newTodoList = [
      ...todoList,
      { id: Math.random().toString(16).slice(2), task: newTask },
    ];
    setTodoList(newTodoList);
  }

  function deleteTask(id) {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  }

  function updateTask(updateTask) {
    if (!updateTask) return;
    let newTodoList = [];
    for (const todo of todoList) {
      if (todo.id === currentId) {
        todo.id = currentId;
        todo.task = updateTask;
      }
      newTodoList.push(todo);
    }
    setTodoList(newTodoList);
  }

  function dataNeededUpdate(classBtn, contentBtn, task, id) {
    setClassButton(classBtn);
    setContentButton(contentBtn);
    setCurrentTask(task);
    setCurrentId(id);
  }

  return (
    <div className="container">
      <FormAdd
        classButton={classButton}
        contentButton={contentButton}
        addNewTask={addNewTask}
        currentTask={currentTask}
        updateTask={updateTask}
      />
      <ul id="myUl">{renderList()}</ul>
    </div>
  );
}

export default TodoList;
