import MoviesStack from "./WishListScreens/MoviesStack";
import TVStack from "./WishListScreens/TvStack";
import StackAll from "../../../../components/templates/StackListingAndDetails";

const WishListStack=() =>{
  return (<StackAll MoviesStack={MoviesStack} TVStack={TVStack}/>
   
  );
};
export default WishListStack;