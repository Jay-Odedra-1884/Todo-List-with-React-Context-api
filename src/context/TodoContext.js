import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [],
    addTodo: (msg) => {},
    updateTodo: (is, msg) => {},
    deleteTodo: (id) => {},
    toggleIsDone: (id) => {}
});

export default function useTodo() {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;