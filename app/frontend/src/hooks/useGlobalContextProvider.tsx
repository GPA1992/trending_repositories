import { useState } from 'react';

export default function useGlobalContextProvider() {
	const [count, setCount] = useState(0);
	const [language, setLanguage] = useState('typescript');
	return {
		count,
		setCount,
		language,
		setLanguage,
	};
}
