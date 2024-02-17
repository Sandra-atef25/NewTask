
import TVStack from "./HomeScreens/TvStack";
import MoviesStack from "./HomeScreens/MoviesStack";
import StackAll from "../../../../components/templates/StackListingAndDetails";

const HomeStack = () => {
  return (
      <StackAll MoviesStack={MoviesStack}
      TVStack={TVStack}/>
  );
};

export default HomeStack;

