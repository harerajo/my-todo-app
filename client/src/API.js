import axios from "axios";
const baseUrl = "http://localhost:4000";

export const getTodos = async () => {
    try {
        const todos = await axios.get(baseUrl + "/todos");
        return todos;
    }
    catch (error) {
        throw new Error("error");
    }
};


export const addTodo = async (formData) => {
    try {
        const todo = {
            name: formData.name,
            description: formData.description,
            status: false,
        };
        const saveTodo = await axios.post(baseUrl + "/add-todo", todo);
        return saveTodo;
    }
    catch (error) {
        throw new Error("error");
    }
};



export const updateTodo = async (todo) => {
    try {
        const todoUpdate = {
            status: true,
        };
        const updatedTodo = await axios.put(`${baseUrl}/edit-todo/${todo._id}`, todoUpdate);
        return updatedTodo;
    }
    catch (error) {
        throw new Error("error");
    }
};



export const deleteTodo = async (_id) => {
    try {
        const deletedTodo = await axios.delete(`${baseUrl}/delete-todo/${_id}`);
        return deletedTodo;
    }
    catch (error) {
        throw new Error("error");
    }
};

