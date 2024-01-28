import PrimaryButton from "../../Components/PrimaryButton";
const AccountDetailsDetails=({navigation})=> {
  return (
    <PrimaryButton onPress={() => { navigation.goBack(); } } children={undefined}/>
  );
}
export default AccountDetailsDetails;