// Define the Todo type
interface Todo {
    id: number;
    todoMessage: string;
    completed: boolean;
}

// Define the props for TodoItem component
interface TodoItemProps {
    todo: Todo;
}

interface TodoContextType {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    updateTodo: (id: number, todo: Todo) => void;
    deleteTodo: (id: number) => void;
    toggleComplete: (id: number) => void;
}