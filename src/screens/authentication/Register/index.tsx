import { View } from 'react-native';

import { styles } from './style';

import Gradient from "../../../components/atoms/Gradient";

import UserNameInput from "./partials/UserNameInput";
import AuthenticationButtons from "./partials/AuthenticationButtons";

import { useHandleUserInput } from "./hooks/HandleUserInputHook";
import { useHandleGoBack } from "./hooks/HandleGoBackHook";
const LoginScreen = () => {
    const { enteredName, pressHandler, setEnteredName } = useHandleUserInput();
    const { pressHandleGoback } = useHandleGoBack();
    return (
        <View style={styles.Container}>
            <>
                <Gradient>
                    <UserNameInput enteredName={enteredName} inputHandler={setEnteredName} textLabel="Name: " placeholder="UserName"/>
                    <AuthenticationButtons handleRegister={pressHandler} pressHandler={pressHandleGoback} />
                </Gradient>
            </>
        </View>
    );
};
export default LoginScreen;

