import React from 'react';
import useGlobalContextProvider from '../hooks/useGlobalContextProvider';
import GlobalContext from './GlobalContext';

type Props = {
        children: JSX.Element
}
export default function GlobalContextProvider(props: Props) {
    const valuesPRovider = useGlobalContextProvider();

    return (
        <GlobalContext.Provider value={valuesPRovider}>
            {props.children}
        </GlobalContext.Provider>
    );
}