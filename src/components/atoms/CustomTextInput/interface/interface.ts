export interface textInputProps{
    textLabel:string,
    placeholder:string,
    enteredName:string,
    inputHandler:React.Dispatch<React.SetStateAction<string>>
}