import Todos from './components/Todos';
import NewTodo from './components/NewTodo';

export default function App(): JSX.Element {
    return (
        <>
            <header className='text-center p-4 flex flex-col gap-3 mb-5'>
                <h1 className='text-6xl font-bold'>TSX</h1>
                <p className='text-2xl'>Hi TypeScript</p>
            </header>
            <NewTodo />
            <Todos />
        </>
    );
}
