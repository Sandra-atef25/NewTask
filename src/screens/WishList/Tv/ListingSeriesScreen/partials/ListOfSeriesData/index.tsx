import Listing from "../../../../../../components/molecules/Listing";
import RenderSeries from "../../../../../../components/organisms/series/RenderSeries";
import { listOfSeriesProp } from "./interface";
const ListOfSeriesData = ({fetchedSeries,handleEndReached,isFetchingSeries,noMatchingSeries}:listOfSeriesProp) => {
    return (
        <Listing fetchedData={fetchedSeries} handleEndReached={handleEndReached} isFetchingData={isFetchingSeries} noMatchingData={noMatchingSeries} 
        renderData={({item})=>{return <RenderSeries item={item}/>}} title="No Favorite Series" ></Listing>
    );
};
export default ListOfSeriesData;