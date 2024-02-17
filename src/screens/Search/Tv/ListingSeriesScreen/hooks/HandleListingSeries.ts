import { TvProps } from "../../../../../models/Tv";
import { useApiFetchingHook } from "../../../../../services/useApiFetchingHook";
import { asyncStorageProps } from "./interface/interfaceAsyncStorage";

export const useFetchSeriesData=({page,fetchedSeries}:asyncStorageProps)=>{
    const {fetchTVList}=useApiFetchingHook();
      //http request for getting series list //
      async function getSeriesList() {
        const seriesList = await fetchTVList(page);
        //if there is a no data in series list  so consider it the end of flat list
        const filtered = seriesList.filter((newItem: TvProps) => !fetchedSeries.some((item: TvProps) => item.id === newItem.id));
        return filtered;
    }
    
    return {
        getSeriesList
    }
}