import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { TodoContextProvider } from './store/todo-context.tsx';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <TodoContextProvider>
            <App />
        </TodoContextProvider>
    </StrictMode>
);
