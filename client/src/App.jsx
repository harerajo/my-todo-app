import React, { useEffect, useState } from "react";
import TodoItem from "./component/TodoItem";
import AddTodo from "./component/AddTodo";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./API";
const App = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetchTodos();
    }, []);
    const fetchTodos = () => {
        getTodos()
            .then(({ data: { todos } }) => setTodos(todos))
            .catch((err) => console.log(err));
    };
    const handleSaveTodo = (e, formData) => {
        e.preventDefault();
        addTodo(formData)
            .then(({ status, data }) => {
            if (status !== 201) {
                throw new Error("Error! Todo not saved");
            }
            setTodos(data.todos);
        })
            .catch((err) => console.log(err));
    };
    const handleUpdateTodo = (todo) => {
        updateTodo(todo)
            .then(({ status, data }) => {
            if (status !== 200) {
                throw new Error("Error! Todo not updated");
            }
            setTodos(data.todos);
        })
            .catch((err) => console.log(err));
    };
    const handleDeleteTodo = (_id) => {
        deleteTodo(_id)
            .then(({ status, data }) => {
            if (status !== 200) {
                throw new Error("Error! Todo not deleted");
            }
            setTodos(data.todos);
        })
            .catch((err) => console.log(err));
    };
    return (React.createElement("main", { className: "App" },
        React.createElement("h1", null, "My Todos"),
        React.createElement(AddTodo, { saveTodo: handleSaveTodo }),
        todos.map((todo) => (React.createElement(TodoItem, { key: todo._id, updateTodo: handleUpdateTodo, deleteTodo: handleDeleteTodo, todo: todo })))));
};
export default App;
