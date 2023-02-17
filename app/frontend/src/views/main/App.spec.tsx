import React from 'react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Main from './index';

describe('counter', () => {
    test('Se existe um texto Counter API na tela', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Main />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText('Redux Counter')).toBeInTheDocument();
    });
});
