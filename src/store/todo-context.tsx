import { useState, createContext } from 'react';
import { Todo } from '../models/todo';

type TodoContextType = {
    todos: Todo[];
    addTodo: (todo: string) => void;
    removeTodo: (id: number) => void;
};

const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => {},
    removeTodo: () => {},
});

const TodoContextProvider: React.FC<{ children: React.ReactNode }> = props => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [currentTodo, setCurrentTodo] = useState<number>(0);
    const addTodo: (todo: string) => void = todo => {
        setTodos(prevTodos => [...prevTodos, new Todo(currentTodo, todo)]);
        setCurrentTodo(prevCurrentTodo => prevCurrentTodo + 1);
    };
    const removeTodo: (id: number) => void = id => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoContextProvider };
