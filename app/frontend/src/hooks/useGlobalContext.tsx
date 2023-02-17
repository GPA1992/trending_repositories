import { useContext } from 'react';

import GlobalContext from '../context/GlobalContext';

export default function useGlobalContext () {
    return useContext(GlobalContext);
}