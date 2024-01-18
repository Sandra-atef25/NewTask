import { Button,View } from "react-native";
import PrimaryButton from "../../Components/PrimaryButton";
function HomeDetails({navigation}){
    function pressgoback(){
        navigation.goBack();
    }
    return (
       <PrimaryButton onPress={pressgoback} children={undefined}/>
    );
}
export default HomeDetails;