import React from 'react';
import Repositories from '../../components/repositories/repositories';
import Header from '../../components/header/header';
import './main.styles.sass';
import Footer from '../../components/footer/footer';

function Main() {
	return (
		<body>
			<Header />
			<main>
				<Repositories />
			</main>
			<Footer />
		</body>
	);
}

export default Main;
