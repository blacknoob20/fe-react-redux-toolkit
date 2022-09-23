import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {
    const { page, isLoading, pokemons } = useSelector((state) => state.pokemons);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPokemons(0));
        console.log(pokemons);

    }, []);

    return (
        <>
            <h1>Pokemon API</h1>
            <hr />
            <p>Loaging: {isLoading ? 'True' : 'False'}</p>
            <ul>
                {
                    pokemons.map(({ name }, i) => {
                        return (<li key={i}>{name}</li>)
                    })
                }
            </ul>
            <button
                disabled={isLoading}
                onClick={() => dispatch(getPokemons(page))}
            >
                Next
            </button>
        </>
    )
}
