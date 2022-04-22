import React from "react";
import { Header } from "./styles";
import Pokemon from './../Pokemon/index';
import Pagination from './../Pagination/index';


const Pokedex =(props) => {
    const { pokemons, loading, setPage,page, totalPages } = props;
    const onLeftClickHandler = () =>{
        if(page > 0){
            setPage(page-1);
        }
    }
    const onRightClickHandler = () =>{
        if(page+1 !== totalPages){
            setPage(page+1);
        }
    }
    return(
        <div>
            <Header className="pokedex-header">
                <h1>Pokedex</h1>
                <Pagination
                page={page+1} 
                totalPages={totalPages}
                onLeftClick={onLeftClickHandler}
                onRightClick={onRightClickHandler}
                />
            </Header>
            {loading ? (
            <div>Carregando, segura fera...</div>)
             : (
             <div className="pokedex-grid"> 
                {pokemons && pokemons.map((pokemon, index) =>{
                    return (
                        <Pokemon key={index} pokemon={pokemon} />
                    )
                })}
             </div>
            )}
        </div>
    );
};
export default Pokedex;