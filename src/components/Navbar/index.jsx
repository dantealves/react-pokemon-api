import React, { useContext } from "react";
import { ImgContainer, NavbarContainer } from "./styles";
import FavoriteContext from "../../Context/FavoriteContext";

export const Navbar = () =>{
    const { favoritePokemons } = useContext(FavoriteContext);
    const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
    return(
        <NavbarContainer>
            <div>
                <ImgContainer 
                src={logoImg}
                alt="logo" 
                className="navbar-img"
                />
            </div>
            <div>{favoritePokemons.length}💖</div>
        </NavbarContainer>
    )
}

export default Navbar;