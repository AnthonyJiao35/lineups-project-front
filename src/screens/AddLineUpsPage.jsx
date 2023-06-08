import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import DataList from "../components/DataList";
import { API_URL } from "../utils/constants";
import DisplayAgents from "../components/DisplayAgents";

export const AddLineUpsPage = ({ navigation }) => {
    const [data, setData] = useState();
    
    useEffect(() => {
        axios.get('https://valorant-api.com/v1/agents')
            .then(response => {
                setData(response.data.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    return (
        <View style={styles.container}>
            <Text>Test Screen</Text>
            <CustomButton title="Go to Home Page" onPress={() => navigation.navigate('Accueil')} />
            {/* <DataList data={data} object="Agent"/> */}
            {data && <DisplayAgents data={data} />}
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

export default AddLineUpsPage;