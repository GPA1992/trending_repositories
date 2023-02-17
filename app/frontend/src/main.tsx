import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import MainRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <MainRoutes />
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);
