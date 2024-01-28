import { current } from "@reduxjs/toolkit";
import { createContext, ReactNode, useState } from "react";
import { MoviesProps } from "../../Models/Movies";
//create context
export const FavoriteMoviesContext = createContext({
  favoriteMovie: [], //value of context shared array of objects
  addFavorites:()=>{},
  removeFavorites:()=>{}

});
//this function enables us the use the username so we will wrap all components that use username context inside it
function MoviesContextProvider( {children}){
  //addd all logic to manage all context
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const addFavorite=(movie)=>{
    setFavoriteMovies((currentFavorites)=>[...currentFavorites,movie]);
  }
  const removeFavorite=(movie)=>{
    setFavoriteMovies((currentFavorites)=>currentFavorites.filter((movieid)=>movie.id!== movieid.id));
  }
  //to pass this state value to context provider 
  const value ={
    favoriteMovie:favoriteMovies,
    addFavorites:addFavorite,
    removeFavorites:removeFavorite

  };
  return <FavoriteMoviesContext.Provider value={value}>{children}</FavoriteMoviesContext.Provider>;
}
export default MoviesContextProvider;


