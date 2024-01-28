import PrimaryButton from "../../Components/PrimaryButton";
const HomeDetails=({navigation})=>{
    const pressGoBack=()=>{
        navigation.goBack();
    };
    return (
       <PrimaryButton onPress={pressGoBack} children={undefined}/>
    );
};
export default HomeDetails;