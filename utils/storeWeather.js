import AsyncStorage from '@react-native-community/async-storage';
//guardar dados da API em cache 
export const storeWeather = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("@storage_Key", jsonValue);
        console.log("Data Pesisted in Cache");
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (err) {
        console.log(err);
    }
};
//exportar dados caso se perca a coneção
export const getWeather = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem("@storage_Key");
        jsonValue === undefined
            ? console.log("No Data in Cache")
            : console.log("Retrieved from Cache");
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (err) {
        console.log(err);
    }
};
