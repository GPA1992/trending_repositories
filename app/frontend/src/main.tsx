import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.sass';
import MainRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<MainRoutes />
		</BrowserRouter>
	</React.StrictMode>
);
