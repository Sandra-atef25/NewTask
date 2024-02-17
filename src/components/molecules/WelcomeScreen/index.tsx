import { View } from "react-native";
import {useContext } from 'react';
import { UserName } from "../../../store/UsernameContext/UserContext";
import Title from "../../atoms/Title";
import { styles } from "./style";
import { Colors } from "../../../theme/colors/Colors";
import { welcomeScreenProp } from "./interface/interface";
const Welcome = ({ children }:welcomeScreenProp ) => {
    const user = useContext(UserName);//pass object used to create context in usecontext to be able to use all the things provided in it
    const welcome = "Welcome " + user.nameOfUser;
    return (
        <View style={styles.container}>
            <Title color={Colors.red} fontWeight="normal" fontSize={30} title={welcome} />
            <View>{children}</View>
        </View>
    );
};
export default Welcome;