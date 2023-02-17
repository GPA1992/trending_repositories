import { useState } from 'react';

export default function useGlobalContextProvider() {
    const [count, setCount] = useState(0);
    return {
        count,
        setCount
    };
}