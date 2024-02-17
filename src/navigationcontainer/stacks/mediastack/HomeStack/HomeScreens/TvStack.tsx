import ListingTVScreen from "../../../../../screens/Home/Tv/ListingSeriesScreen/index";
import DetailsTVScreen from "../../../../../screens/Home/Tv/DetailsSeriesScreen/index";
import StackOfSeries from "../../../../../components/templates/series/StackOfSeries";
const TVStack = () => {
    return <StackOfSeries ListingTVScreen={ListingTVScreen} DetailsTVScreen={DetailsTVScreen} />
};
export default TVStack;