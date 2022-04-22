import React from 'react';
import { useState, useEffect } from 'react'
import './GlobalStyles.css'

// COMPONENTS e CONFIG
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar';
import Pokedex from './components/Pokedex';
import { getPokemons, getPokemonsData, searchPokemon } from './config/Api';
import { FavoriteProvider } from './Context/FavoriteContext';

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const [favorites, setFavorites] = useState([]);
  const favoritesKey = 'f'
  
  const itensPerPage = 25;
  const fetchPokemons = async () =>{
    try {
      setLoading(true)
      setNotFound(false)
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) =>{
        return await getPokemonsData(pokemon.url)
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count/itensPerPage));
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  }
  useEffect(() => {
    fetchPokemons();
  }, [page]);

    // TODO: tentar armazenar no localStorage
    // ! Unexpected token u in JSON at position 0
    // const loadFavoritePokemons = () =>{
    //   const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey))
    //   setFavorites(pokemons)
    // }

    // useEffect(() => {
    //     loadFavoritePokemons()
    //   }, []);

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if(favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    }else {
      updatedFavorites.push(name);
    }
    // ! Unexpected token u in JSON at position 0
    // window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites);
  }

  const onSearchHandler = async (pokemon) =>{
    if(!pokemon){
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    if(!result){
      setNotFound(true);
    }else{
      setPokemons([result])
      setPage(0)
      setTotalPages(1)
    }
    setLoading(false);
  }

  return (
    <FavoriteProvider 
    value={{
      favoritePokemons: favorites, 
      updateFavoritePokemons: updateFavoritePokemons}}>
      <div>
        <Navbar />
        <SearchBar onSearch={onSearchHandler}/>
        {notFound ? (
          <div className='not-found-msg'>Tem esse aqui não parceiro</div>
        ) :
        <Pokedex 
          pokemons={pokemons}
          loading={loading}
          page={page} 
          setPage={setPage}
          totalPages={totalPages}
        />}
      </div>
    </FavoriteProvider>
  )
}
export default App;
