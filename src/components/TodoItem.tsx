import { useContext } from 'react';
import { TodoContext } from '../store/todo-context';

const TodoItem: React.FC<{
    id: number;
    text: string;
}> = props => {
    const { removeTodo } = useContext(TodoContext);

    return (
        <li
            onClick={removeTodo.bind(null, props.id)} // Binding will prevent the function to complain about the event argument passed from onClick
            className='p-2 bg-blue-100 text-blue-900 rounded cursor-pointer hover:bg-blue-900 hover:text-blue-100 transition-colors'
        >
            {props.text}
        </li>
    );
};

export default TodoItem;
