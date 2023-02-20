import React from 'react';
import './navigateBar.styles.sass';
import useGlobalContext from '../../hooks/useGlobalContext';

export default function NavigateBar() {
	const { setLanguage } = useGlobalContext();

	const handleButtonClick = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		setLanguage(event.currentTarget.textContent);
	};
	return (
		<div className="navigate-bar">
			<p>Select Language</p>
			<div className="buttons">
				<button onClick={handleButtonClick}>TypeScript</button>
				<button onClick={handleButtonClick}>JavaScript</button>
				<button onClick={handleButtonClick}>Python</button>
				<button onClick={handleButtonClick}>Java</button>
				<button onClick={handleButtonClick}>PHP</button>
			</div>
		</div>
	);
}
