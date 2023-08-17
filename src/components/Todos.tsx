import { useContext } from 'react';
import { Todo } from '../models/todo';
import { TodoContext } from '../store/todo-context';
import TodoItem from './TodoItem';

const Todos: React.FC = () => {
    const { todos } = useContext(TodoContext);

    return (
        <ul className='p-4 flex flex-col gap-4'>
            {todos.map((todo: Todo) => (
                <TodoItem key={todo.id} id={todo.id} text={todo.text} />
            ))}
        </ul>
    );
};

export default Todos;
