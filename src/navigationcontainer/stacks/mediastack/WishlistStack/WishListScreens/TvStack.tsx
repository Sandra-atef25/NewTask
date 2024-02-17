import FavoritesSeriesScreen from "../../../../../screens/WishList/Tv/ListingSeriesScreen/index";
import DetailsTVScreen from "../../../../../screens/WishList/Tv/DetailsSeriesScreen";
import StackOfSeries from "../../../../../components/templates/series/StackOfSeries";
const TVStack = () => {
    return <StackOfSeries ListingTVScreen={FavoritesSeriesScreen} DetailsTVScreen={DetailsTVScreen} />
};
export default TVStack;