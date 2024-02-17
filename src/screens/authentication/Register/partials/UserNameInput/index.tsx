import CustomTextInput from "../../../../../components/atoms/CustomTextInput";
import { textInputProps } from "../../../../../components/atoms/CustomTextInput/interface/interface";

const UserNameInput =({enteredName,inputHandler,placeholder,textLabel}:textInputProps)=>{
    return (<CustomTextInput enteredName={enteredName} inputHandler={inputHandler} placeholder={placeholder} textLabel={textLabel}/>)
};
export default UserNameInput;