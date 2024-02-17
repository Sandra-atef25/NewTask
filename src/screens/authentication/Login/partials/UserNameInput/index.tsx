import CustomTextInput from "../../../../../components/atoms/CustomTextInput";
import { textInputProps } from "../../../../../components/atoms/CustomTextInput/interface/interface";

const UserNameInput =({enteredName,inputHandler,placeholder,textLabel}:textInputProps)=>{
    return (<CustomTextInput enteredName={enteredName} inputHandler={inputHandler} textLabel={textLabel} placeholder={placeholder}/>)
};
export default UserNameInput;