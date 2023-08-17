import { Todo } from '../models/todo';
import TodoItem from './TodoItem';

const Todos: React.FC<{
    todos: Todo[];
    onDeleteTodo: (id: number) => void;
}> = props => {
    return (
        <ul className='p-4 flex flex-col gap-4'>
            {props.todos.map((todo: Todo) => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    deleteItem={props.onDeleteTodo}
                />
            ))}
        </ul>
    );
};

export default Todos;
