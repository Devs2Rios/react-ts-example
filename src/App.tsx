import { useState } from 'react';
import { Todo } from './models/todo';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';

export default function App(): JSX.Element {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [currentTodo, setCurrentTodo] = useState<number>(0);
    const handleAddTodo: (todo: string) => void = todo => {
        setTodos(prevTodos => [...prevTodos, new Todo(currentTodo, todo)]);
        setCurrentTodo(prevCurrentTodo => prevCurrentTodo + 1);
    };
    const handleDeleteTodo: (id: number) => void = id => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    return (
        <>
            <header className='text-center p-4 flex flex-col gap-3 mb-5'>
                <h1 className='text-6xl font-bold'>TSX</h1>
                <p className='text-2xl'>Hi TypeScript</p>
            </header>
            <NewTodo addTodo={handleAddTodo} />
            <Todos todos={todos} onDeleteTodo={handleDeleteTodo} />
        </>
    );
}
