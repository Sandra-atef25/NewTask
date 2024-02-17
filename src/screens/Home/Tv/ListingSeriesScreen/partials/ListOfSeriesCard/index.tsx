import Listing from "../../../../../../components/molecules/Listing";
import RenderSeries from "../../../../../../components/organisms/series/RenderSeries";
import { listOfSeriesProps } from "./interface";

const ListOfSeriesData = ({ fetchedSeries, handleEndReached, isFetchingSeries, noMatchingSeries }: listOfSeriesProps) => {
    return (
        <Listing
            fetchedData={fetchedSeries}
            handleEndReached={handleEndReached}
            isFetchingData={isFetchingSeries}
            noMatchingData={noMatchingSeries}
            renderData={({ item }) => { return <RenderSeries item={item} /> }}
            title="No Matching Series" />
    );
};
export default ListOfSeriesData;