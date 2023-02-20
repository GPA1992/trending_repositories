import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/main/main';
import GlobalContextProvider from './context/GlobalContextProvider';

export default function MainRoutes() {
	return (
		<GlobalContextProvider>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="*" element={<h1> 404 - Not found </h1>} />
			</Routes>
		</GlobalContextProvider>
	);
}
