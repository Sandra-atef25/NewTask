import PrimaryButton from "../../Components/PrimaryButton";
function AccountDetailsDetails({navigation}) {
  return (
    <PrimaryButton onPress={() => { navigation.goBack(); } } children={undefined}/>
  );
}
export default AccountDetailsDetails;