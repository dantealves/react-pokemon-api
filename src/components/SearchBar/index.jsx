import React from 'react';
import { useState } from 'react';
import { SearchBarContainer, SearchBtn } from './styles';
import { searchPokemon } from './../../config/Api';

const SearchBar = (props) =>{
    const [search, setSearch] = useState('ditto');
    const { onSearch } = props
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0) {
            onSearch(undefined)
        }
    }
    const onButtonClickHandler = () =>{
            onSearch(search);

    }
    return(
        <SearchBarContainer className='search-bar-container'>
            <div className='search-bar'>
                <input placeholder="Buscar pokémon" onChange={onChangeHandler}/>
            </div>
            <div className='searchbar-btn'>
                <SearchBtn onClick={onButtonClickHandler}>Buscar</SearchBtn>
            </div>
            <div>
            </div>
        </SearchBarContainer>
    )
}

export default SearchBar;