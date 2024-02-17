import { useNavigation } from "@react-navigation/native";
import { AuthenticationStackNavigation } from "../../../../navigationcontainer/stacks/authenticationstack";

export const useHandleGoBack=()=>{
    const navigation =useNavigation<AuthenticationStackNavigation>();
    const pressHandleGoback = () => {
        navigation.navigate("Login");
    };
    return {
        pressHandleGoback
    };
}
