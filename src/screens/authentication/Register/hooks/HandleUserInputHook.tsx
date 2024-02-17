import { useNavigation } from "@react-navigation/native";
import { useState, useContext } from "react";
import { Alert } from "react-native";
import { AppStackNavigation } from "../../../../navigationcontainer";
import { UserName } from "../../../../store/UsernameContext/UserContext";
export const useHandleUserInput = () => {
    const [enteredName, setEnteredName] = useState("");
    const user = useContext(UserName);//pass object used to create context in usecontext to be able to use all the things provided in it 
    const navigation=useNavigation<AppStackNavigation>();
    const pressHandler = () => {
        if (enteredName.trim() === "") {
            Alert.alert("Invalid Name ", "Name must not be empty", [
                { text: "Okay", style: "destructive", },
            ]);
            return;
        }
        user.nameOfUser = enteredName;
        navigation.navigate("MainStackTwo");
    };
    return {
        enteredName,
        pressHandler,
        setEnteredName
    };
};

