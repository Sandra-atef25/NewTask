import { createContext, ReactNode, useState } from "react";
//this function to create a state management for the favorites ether movies or series depending
//internalling on this selected movie based on id or series id


//1st create context
export const favorites = createContext({
  favoritesData: false, //value of context shared
  toggleBoolean:()=>{},
});
//this function enables us the use the username so we will wrap all components that use username context inside it
const FavoritesContextProvider=( {children}:{children:ReactNode} )=>{
  //addd all logic to manage all context
  const [favoritesD, setFavorites] = useState(false);
  //to pass this state value to context provider 
  
  const toggleBoolean = () => {
    setFavorites((prevValue) => !prevValue);
  }
  const value ={
    favoritesData:favoritesD,
    toggleBoolean:toggleBoolean,
  }
  return <favorites.Provider value={value}>{children}</favorites.Provider>;
};
export default FavoritesContextProvider;