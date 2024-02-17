import Card from "../../../molecules/Card";
import { listOfMovieItemProps } from "./interface/interface";
export const MovieItem = ({ movieItem, onPress }: listOfMovieItemProps) => {
    const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/original";
    const posterPath: string = BASE_URL_IMAGE + movieItem?.poster_path?.toString();

    const title =movieItem.title.length>21? movieItem.title.slice(0,17)+'..':movieItem.title;
   
    return (
        <Card onPress={onPress} title={title} posterPath={posterPath}/>
    );
    
}