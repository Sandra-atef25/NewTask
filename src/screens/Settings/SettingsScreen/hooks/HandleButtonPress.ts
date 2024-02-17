import { useNavigation } from "@react-navigation/native";
import { SettingsStackNavigation } from "../../../../navigationcontainer/stacks/mediastack/SettingsStack";
export const useButtonPressHandle=()=>{
    const navigation =useNavigation<SettingsStackNavigation>();
    const onPressHandle = () => {
        navigation.navigate("SettingsDetails");
    };
    return {onPressHandle};
}

