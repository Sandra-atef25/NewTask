import Card from '../../../molecules/Card';
import { listofSerieItemProps } from './interface/Interface';

const SeriesItem = ({ serieItem, onPress }: listofSerieItemProps) => {
    const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/original";
    const posterPath: string = BASE_URL_IMAGE + serieItem?.poster_path?.toString();
    const title = serieItem.name.length > 21 ? serieItem.name.slice(0, 17) + '...' : serieItem.name;
    return (
        <Card onPress={onPress} title={title} posterPath={posterPath}/>
    );
};
export default SeriesItem;