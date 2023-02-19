import React from 'react';
import Repositories from '../../components/repositories';
import styles from './styles.module.scss';

function Main() {
    return (
        <div className={styles.container}>
            <Repositories />
            <hr />
        </div>
    );
}

export default Main;
