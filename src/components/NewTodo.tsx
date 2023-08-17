import { useRef } from 'react';

const NewTodo: React.FC<{ addTodo: (todo: string) => void }> = props => {
    const inputRef = useRef<HTMLInputElement>(null);

    const submitHAndler: React.FormEventHandler<HTMLFormElement> = event => {
        event.preventDefault();
        const enteredText = inputRef.current!.value;
        // ? means if inputRef.current is null, it will return undefined.
        // ! means you're sure it won't be null
        if (enteredText.trim().length === 0) return;
        props.addTodo(enteredText);
    };

    return (
        <form className='flex gap-2 flex-col mb-8' onSubmit={submitHAndler}>
            <label htmlFor='new-todo'>Todo Text</label>
            <input
                className='p-6 mb-5'
                ref={inputRef}
                type='text'
                id='new-todo'
            />
            <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors'
                type='submit'
            >
                Add Todo
            </button>
        </form>
    );
};

export default NewTodo;
