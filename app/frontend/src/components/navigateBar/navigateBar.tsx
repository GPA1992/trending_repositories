import React from 'react';
import './navigateBar.styles.sass';

export default function NavigateBar() {
	return (
		<div className="navigate-bar">
			<button>TypeScript</button>
			<button>JavaScript</button>
			<button>Python</button>
			<button>Java</button>
			<button>PHP</button>
		</div>
	);
}
