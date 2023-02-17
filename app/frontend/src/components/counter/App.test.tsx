import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Counter from './index';

describe('counter', () => {
    test('Se existe um texto Counter API na tela', () => {
        const { debug } = render(<Counter />);
        /* debug(); */
        expect(screen.getByText('Context API')).toBeInTheDocument();
    });
    test('Se existe um numero', () => {
        const { debug } = render(<Counter />);
        /* debug(); */
        expect(screen.getByText('0')).toBeTruthy();
    });
});
