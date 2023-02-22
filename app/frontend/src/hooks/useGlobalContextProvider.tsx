import { useState } from 'react';

export default function useGlobalContextProvider() {
	const [language, setLanguage] = useState('typescript');
	return {
		language,
		setLanguage,
	};
}
