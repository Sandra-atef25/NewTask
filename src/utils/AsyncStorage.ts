import AsyncStorage from '@react-native-async-storage/async-storage';

//this function used to save the selected data to a certain async storage based on id of that async storage item
export const saveData = async (key:string,data: any) => {
  try {
    const keyData=JSON.stringify(data);
    if (keyData?.length === null) {
      await AsyncStorage.setItem(key, "");
    }
    else {
      await AsyncStorage.setItem(key, keyData);
    }
  } catch (error) {
    console.error('Error saving data:', error);
  }
};

//this function used to remove data from async storage
export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data:', error);
  }
};

//this function used to retrieve data from async storage based on a certain key
export const retrieveData = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if(data){
      return JSON.parse(data);
    }
    return [];
  }
  catch (error) {
    console.log("error retrieving data");
  }
};

//this function used to clear all data in async storage
export const clearData = async () => {

  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('Error removing data:', error);
  }
}