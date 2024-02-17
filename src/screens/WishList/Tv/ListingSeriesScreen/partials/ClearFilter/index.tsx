import PrimaryButton from "../../../../../../components/atoms/PrimaryButton";
import { Colors } from "../../../../../../theme/colors/Colors";
import { clearFilterProp } from "./interface";

const ClearFilterButton=({handleClearFilter}:clearFilterProp)=>{

    return (
        <PrimaryButton color={Colors.red} name="Clear Filter" onPress={handleClearFilter} />
    );
};

export default ClearFilterButton;