import { createContext, ReactNode, useState } from "react";
//create context
export const MovieSelected = createContext({
  movietitle: "", //value of context shared
});
//this function enables us the use the username so we will wrap all components that use username context inside it
function MoviesContextProvider( {children}:{children: ReactNode} ){
  //addd all logic to manage all context
  const [title, setTitle] = useState("");
  //to pass this state value to context provider 
  const value ={
    movietitle:title,
  };
  return <MovieSelected.Provider value={value}>{children}</MovieSelected.Provider>;
}
export default MoviesContextProvider;


