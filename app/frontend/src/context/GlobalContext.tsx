/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, Dispatch, SetStateAction } from 'react';

type GlobalContextType = {
    count: number,
    setCount: Dispatch<SetStateAction<number>>,
}

const GlobalContext = createContext<GlobalContextType>({
    count: 0,
    setCount: () => {},
});

export default GlobalContext;