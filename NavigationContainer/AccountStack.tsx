
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountDetails from "../Screens/Account/AccountDetails";
import AccountScreen from "../Screens/Account/AccountScreen";
import AccountDetailsDetails from "../Screens/Account/AccountDoubleDetails";

function AccountStack() {
  const Stack = createNativeStackNavigator();

    return (
      <Stack.Navigator
        initialRouteName="Account"
        screenOptions={{ headerStyle: { backgroundColor: "lightblue" } }}
      >
        <Stack.Screen
          name="Account"
          component={AccountScreen}
      
        />
        <Stack.Screen
          name="AccountDetails"
          component={AccountDetails}
          options={{
            headerTitle: "Account Details",
            
          }}
        />
        <Stack.Screen
          name="AccountDetailsDetails"
          component={AccountDetailsDetails}
          options={{
            headerTitle: "Account Details Details",
        
          }}
        />
      </Stack.Navigator>
    );
}
export default AccountStack;
