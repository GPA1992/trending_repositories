import React from 'react';
import Repositories from '../../components/repositories/repositories';
import Header from '../../components/header/header';
import './main.styles.sass';

function Main() {
	return (
		<body>
			<Header />
			<main>
				<Repositories />
			</main>
		</body>
	);
}

export default Main;
