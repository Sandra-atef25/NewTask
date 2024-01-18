import { createContext, ReactNode, useState } from "react";
//create context
export const SeriesTitle = createContext({
    seriesName: "", //value of context shared
});
//this function enables us the use the username so we will wrap all components that use username context inside it
function TVContextProvider( {children}:{children: ReactNode} ){
  //addd all logic to manage all context
  const [name, setseriesName] = useState("");
  //to pass this state value to context provider 
  const value ={
    seriesName:name,
  };
  return <SeriesTitle.Provider value={value}>{children}</SeriesTitle.Provider>;
}
export default TVContextProvider;