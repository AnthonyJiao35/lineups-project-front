import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import DataList from "../components/DataList";
import { API_URL } from "../utils/constants";

export const TestScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get(API_URL+'/agent')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    return (
        <View style={styles.container}>
            <Text>Test Screen</Text>
            <CustomButton title="Go to Home Page" onPress={() => navigation.navigate('Accueil')} />
            <DataList data={data} object="Agent"/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default TestScreen;