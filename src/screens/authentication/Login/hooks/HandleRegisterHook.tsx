import { useNavigation } from "@react-navigation/native";
import { AuthenticationStackNavigation } from "../../../../navigationcontainer/stacks/authenticationstack";

export const useHandleRegister=()=>{
    const navigation =useNavigation<AuthenticationStackNavigation>();
    const pressHandleRegister = () => {
        navigation.navigate("Register");
    };
    return {
        pressHandleRegister
    };
}
