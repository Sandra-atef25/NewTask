import { View } from 'react-native';

import { styles } from './style';

import Gradient from "../../../components/atoms/Gradient";

import UserNameInput from "./partials/UserNameInput";
import AuthenticationButtons from "./partials/AuthenticationButtons";

import { useHandleUserInput } from "./hooks/HandleUserInputHook";
import { useHandleRegister } from "./hooks/HandleRegisterHook";
const LoginScreen = () => {
    const { enteredName, pressHandler, setEnteredName } = useHandleUserInput();
    const { pressHandleRegister } = useHandleRegister();
    return (
        <View style={styles.Container}>
            <>
                <Gradient>
                    <UserNameInput enteredName={enteredName} inputHandler={setEnteredName} placeholder="UserName" textLabel='Name: '/>
                    <AuthenticationButtons handleRegister={pressHandleRegister} pressHandler={pressHandler} />
                </Gradient>
            </>
        </View>
    );
};
export default LoginScreen;

