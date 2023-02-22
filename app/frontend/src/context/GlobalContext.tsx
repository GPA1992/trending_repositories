/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, Dispatch, SetStateAction } from 'react';

type GlobalContextType = {
	language: string;
	setLanguage: Dispatch<SetStateAction<string>>;
};

const GlobalContext = createContext<GlobalContextType>({
	language: '',
	setLanguage: () => {},
});

export default GlobalContext;
