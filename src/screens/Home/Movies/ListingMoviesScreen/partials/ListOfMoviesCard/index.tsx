import Listing from "../../../../../../components/molecules/Listing";
import RenderMovies from "../../../../../../components/organisms/movies/RenderMovies";
import { listOfMoviesProps } from "./interface";

const ListOfMoviesData = ({fetchedMovies,handleEndReached,isFetchingMovies,noMatchingMovie}:listOfMoviesProps) => {
    return (
        <Listing fetchedData={fetchedMovies} handleEndReached={handleEndReached} isFetchingData={isFetchingMovies} noMatchingData={noMatchingMovie} 
        renderData={({item})=>{return <RenderMovies item={item}/>}} title="No Matching Movies" ></Listing>
    );
};
export default ListOfMoviesData;