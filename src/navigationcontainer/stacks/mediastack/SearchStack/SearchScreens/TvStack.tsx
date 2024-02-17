import DetailsTVScreen from "../../../../../screens/Search/Tv/DetailsSeriesScreen/index";
import ListingTVScreen from "../../../../../screens/Search/Tv/ListingSeriesScreen/index";
import StackOfSeries from "../../../../../components/templates/series/StackOfSeries";
const TVStack = () => {
    return <StackOfSeries ListingTVScreen={ListingTVScreen} DetailsTVScreen={DetailsTVScreen} />
};
export default TVStack;