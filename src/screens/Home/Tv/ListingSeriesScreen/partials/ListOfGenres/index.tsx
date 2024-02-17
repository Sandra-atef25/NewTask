import ListingGenres from "../../../../../../components/molecules/ListingGenres";
import { useFetchGenres } from "../../hooks/HandleFetchingGenres";
import RenderGenreItem from "../../../../../../components/organisms/genres/RenderGenre";
import { listOfGenres } from "./interface";
const ListOfGenres = ({ genreFilter, handleGenreFilter, setGenreFilter }: listOfGenres) => {
    const { fetchedTvGenres } = useFetchGenres();
    return (
        <ListingGenres Genres={fetchedTvGenres} renderItem={({ item }) => {
            return <RenderGenreItem item={item} genreFilter={genreFilter} handleGenreFilter={handleGenreFilter} setGenreFilter={setGenreFilter} />
        }} />
    );
};
export default ListOfGenres;