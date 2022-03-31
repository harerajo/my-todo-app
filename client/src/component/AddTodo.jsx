import { useState } from "react";
const AddTodo = ({ saveTodo }) => {
    const [formData, setFormData] = useState();
    const handleForm = (e) => {
        setFormData(Object.assign(Object.assign({}, formData), { [e.currentTarget.id]: e.currentTarget.value }));
    };



	return (
		<form className="Form" onSubmit={(e) => saveTodo(e, formData)}>
			<div>
				<div>
					<label htmlFor="name">Name</label>
					<input onChange={handleForm} type="text" id="name" />
				</div>
				<div>
					<label htmlFor="description">Description</label>
					<input onChange={handleForm} type="text" id="description" />
				</div>
			</div>
			<button disabled={formData === undefined ? true : false}>Add Todo</button>
		</form>
	);
};

export default AddTodo;
