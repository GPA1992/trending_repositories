import React from 'react';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import {
    decrement,
    increment,
    incrementByAmount,
    decrementByAmount,
} from '../../store/slices/counter';

export default function CounterWhitRedux() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <h1>Redux Counter</h1>
            <br />
            <h1>{count}</h1>
            <br />
            <button onClick={() => dispatch(increment())}>Incrementar</button>
            <button onClick={() => dispatch(decrement())}>Decrementar</button>
            <br />
            <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
            <button onClick={() => dispatch(decrementByAmount(5))}>-5</button>
        </div>
    );
}
