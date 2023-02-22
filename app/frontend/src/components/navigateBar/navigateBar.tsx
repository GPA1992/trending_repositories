import React, { useState } from 'react';
import './navigateBar.styles.sass';
import useGlobalContext from '../../hooks/useGlobalContext';

export default function NavigateBar() {
	const { setLanguage } = useGlobalContext();
	const [selectedButton, setSelectedButton] = useState('');

	const handleButtonClick = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		setSelectedButton(event.currentTarget.textContent as string);
		setLanguage(event.currentTarget.textContent as string);
	};

	return (
		<div className="navigate-bar">
			<p>Select Language</p>
			<div className="buttons">
				<button
					className={selectedButton === 'TypeScript' ? 'selected' : ''}
					onClick={handleButtonClick}
				>
					TypeScript
				</button>
				<button
					className={selectedButton === 'JavaScript' ? 'selected' : ''}
					onClick={handleButtonClick}
				>
					JavaScript
				</button>
				<button
					className={selectedButton === 'Python' ? 'selected' : ''}
					onClick={handleButtonClick}
				>
					Python
				</button>
				<button
					className={selectedButton === 'Java' ? 'selected' : ''}
					onClick={handleButtonClick}
				>
					Java
				</button>
				<button
					className={selectedButton === 'PHP' ? 'selected' : ''}
					onClick={handleButtonClick}
				>
					PHP
				</button>
			</div>
		</div>
	);
}
