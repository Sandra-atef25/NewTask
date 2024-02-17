import ListingGenres from "../../../../../../components/molecules/ListingGenres";
import RenderGenreItem from "../../../../../../components/organisms/genres/RenderGenre";
import { movieGenres } from "../../../../../../data/mocks";
import { listOfGenres } from "./interface";
const ListOfGenres = ({ handleGenreFilter,genreFilter,setGenreFilter }:listOfGenres) => {
    return (
        <ListingGenres Genres={movieGenres} renderItem={({ item }) => {
            return <RenderGenreItem item={item} genreFilter={genreFilter} handleGenreFilter={handleGenreFilter} setGenreFilter={setGenreFilter} />
        }} />
    );
};
export default ListOfGenres;