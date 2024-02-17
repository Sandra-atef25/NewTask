
import TVStack from "./SearchScreens/TvStack";
import MoviesStack from "./SearchScreens/MoviesStack";
import StackAll from "../../../../components/templates/StackListingAndDetails";
const SearchStack=() =>{

  return (
    
    <StackAll MoviesStack={MoviesStack} TVStack={TVStack}/> 
   
  );
};
export default SearchStack;
