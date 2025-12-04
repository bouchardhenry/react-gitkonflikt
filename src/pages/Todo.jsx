import { useState } from "react";

function TodoPage() {

    const [todos, setTodos] = useState([
        { todo: "Skapa GitHubRepo", completed: false },
        { todo: "Bjud in deltagare", completed: false }
    ]);

    const [inputValue, setInputValue] = useState("");

    const addTodo = () => {
        if (inputValue.trim() === "") return;

        const newTodo = {
            todo: inputValue,
            completed: false
        };

        const allTodos = [...todos, newTodo].sort((a, b) => a.completed - b.completed);

        setTodos(allTodos);
        setInputValue("");
    };

    const completeTodo = (index) => {
        const newTodoList = [...todos];
        newTodoList[index].completed = true;

        newTodoList.sort((a, b) => a.completed - b.completed);

        setTodos(newTodoList);
    };

    return (
        <div>
            <h1>Todo application</h1>

            <input
                type="text"
                placeholder="Write new todo"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

            <button onClick={addTodo}>Add Todo</button>

            <ul>
                {todos.map((todo, i) => (
                    <Todo
                        key={i}
                        data={todo}
                        index={i}
                        completeTodo={completeTodo}
                    />
                ))}
            </ul>
        </div>
    );
}

function Todo({ data, index, completeTodo }) {
    return (
        <li style={{ marginBottom: "8px" }}>
            <span
                style={{
                    textDecoration: data.completed ? "line-through" : "none"
                }}
            >
                {data.todo}
            </span>

            {!data.completed && (
                <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => completeTodo(index)}
                >
                    Complete
                </button>
            )}
        </li>
    );
}

export default TodoPage;
