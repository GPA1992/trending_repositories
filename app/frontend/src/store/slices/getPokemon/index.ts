import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { thunkGetPokemonByUsername } from './thunks';
import Sprites from '../../../types/pokemon';
import PokemonSliceState from './pokemon.slice';

const initialState: PokemonSliceState = {
	loading: false,
	pokemonSprites: {} as Sprites,
};

const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState,
	reducers: {
		getPokemon: (state, action: PayloadAction<Sprites>) => {
			state.pokemonSprites = action.payload;
		}
	},
	extraReducers: builder => {
		builder.addCase(thunkGetPokemonByUsername.pending, state => {
			state.loading = true;
		});
		builder.addCase(
			thunkGetPokemonByUsername.fulfilled,
			(state, action: PayloadAction<Sprites>) => {
				state.loading = false;
				state.pokemonSprites = action.payload;
			}	);
	},
});

export const { getPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;