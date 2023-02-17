import React, { useState } from 'react';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, pokemon } from '../../store/store';
import { thunkGetPokemonByUsername } from '../../store/slices/getPokemon/thunks';

export default function GetPokemonWhitRedux() {
	const [pokemonName, setPokemonName] = useState('');

	const { pokemonSprites } = useSelector(pokemon);
	const dispatch = useDispatch<AppDispatch>();
	return (
		<div className={styles.container}>
			<h1>Pokemons Whit Redux Thunk </h1>
			<br />
			<p>Procure um pokemon pelo nome</p>
			<span>(algo do tipo, `pikachu``)</span>
			<br />
			<input
				type="text"
				onChange={({ target }) => setPokemonName(target.value)}
			/>
			<br />
			<button
				onClick={() =>
					dispatch(thunkGetPokemonByUsername(pokemonName.toLocaleLowerCase()))
				}
			>
				Teste
			</button>
			<img src={pokemonSprites.front_default} alt="" />
		</div>
	);
}
