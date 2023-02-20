/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, Dispatch, SetStateAction } from 'react';

type GlobalContextType = {
	count: number;
	setCount: Dispatch<SetStateAction<number>>;
	language: string;
	setLanguage: Dispatch<SetStateAction<string | null>>;
};

const GlobalContext = createContext<GlobalContextType>({
	count: 0,
	setCount: () => {},
	language: '',
	setLanguage: () => {},
});

export default GlobalContext;
