import {createContext, useContext} from "react"

// interface Todo {
//     id: number;
//     todoMessage: string;
//     completed: boolean;
// }

// interface TodoContextType {
//     todos: Todo[];
//     addTodo: (todo: Todo) => void;
//     updateTodo: (id: number, todo: Todo) => void;
//     deleteTodo: (id: number) => void;
//     toggleComplete: (id: number) => void;
// }

export const TodoContext = createContext<TodoContextType>({
    todos: [
        {
            id: 1,
            todoMessage: " Todo msg",
            completed: false,
        }
    ],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    toggleComplete: () => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider