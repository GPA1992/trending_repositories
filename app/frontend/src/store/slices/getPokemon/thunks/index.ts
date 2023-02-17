import { createAsyncThunk } from '@reduxjs/toolkit';
/* import getPokemonByName from '../../../../services/pokemon'; */


export const thunkGetPokemonByUsername = createAsyncThunk(
	'pokemon/thunkGetPokemonByUsername',
	async (pokemonName: string)  => {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
		const result = await response.json();
		
		return result.sprites;
	}
);



