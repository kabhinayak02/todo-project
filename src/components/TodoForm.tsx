import { useState, FormEvent, ChangeEvent } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState<string>("")
    const { addTodo } = useTodo()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!todo) return

        addTodo({ id: Date.now(), todoMessage: todo, completed: false })
        setTodo("")
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={handleChange}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
