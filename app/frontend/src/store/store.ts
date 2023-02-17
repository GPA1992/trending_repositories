import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counter';
import pokemonSlice from './slices/getPokemon';

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        getPokemon: pokemonSlice,
    },
});


export type RootState = ReturnType<typeof store.getState>
export const pokemon = (state:  RootState) => state.getPokemon;
export type AppDispatch = typeof store.dispatch