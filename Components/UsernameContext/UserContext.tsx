import { createContext, ReactNode, useState } from "react";
//create context
export const UserName = createContext({
  nameofuser: "", //value of context shared
});
//this function enables us the use the username so we will wrap all components that use username context inside it
function UserContextProvider( {children}:{children: ReactNode} ){
  //addd all logic to manage all context
  const [Username, setUserName] = useState("");
  //to pass this state value to context provider 
  const value ={
    nameofuser:Username,
  };
  return <UserName.Provider value={value}>{children}</UserName.Provider>;
}
export default UserContextProvider;
