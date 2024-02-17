import { useHandleAsyncStorage } from "./hooks/HandleAsyncStorage";
import DetailsSeries from "../../../../components/organisms/series/DetailsSeries";

const DetailsMoviesScreen = () => {
    const { TvSeriesDetails, seriesIsFavorite, heartButtonPressHandler, posterPathNew,matchingGenres} = useHandleAsyncStorage();
    return (
        <DetailsSeries TvSeries={TvSeriesDetails} heartButtonPressHandler={heartButtonPressHandler} matchingGenres={matchingGenres} seriesIsFavorite={seriesIsFavorite} posterPath={posterPathNew} />
    );
}
export default DetailsMoviesScreen;


