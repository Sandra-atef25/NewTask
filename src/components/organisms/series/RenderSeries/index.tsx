import { TvProps } from "../../../../models/Tv";
import SeriesItem from "../SeriesItemCard";
import { useRenderSeries } from "./hooks/useRenderSeries";

const RenderSeries = ({ item: tvSeries }: { item: TvProps }) => {
    const { pressHandle } = useRenderSeries();
    return (
        <SeriesItem serieItem={tvSeries}
            onPress={pressHandle.bind(this, tvSeries)}
        />
    );
};
export default RenderSeries;