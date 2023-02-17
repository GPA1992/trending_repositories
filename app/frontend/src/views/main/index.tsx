import React from 'react';
import Counter from '../../components/counter';
import CounterWhitRedux from '../../components/counterWhitRedux';
import GetPokemonWhitRedux from '../../components/getPokemonWhitRedux';
import styles from './styles.module.scss';

function Main() {
    return (
        <div className={styles.container}>
            <Counter />
            <hr />
            <CounterWhitRedux />
            <hr />
            <GetPokemonWhitRedux />
        </div>
    );
}

export default Main;
