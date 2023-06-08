import { StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../components/CustomButton";
import { useEffect, useState } from "react";
import axios from "axios";
import DataList from "../components/DataList";
import { API_URL } from "../utils/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem("token").then((token) => {
            if(token)setIsConnected(true);
            else setIsConnected(false);
        })
    }, [AsyncStorage.getItem("token")])
    
    if(isConnected) return navigation.navigate('Main');

    const handleSubmit = () => {
        try {
            if (!username) throw new Error("Veuillez entrer un nom d'utilisateur");
            if (!mail) throw new Error("Veuillez entrer un mail");
            if (!password) throw new Error("Veuillez entrer un mot de passe");
            const submit = {
                username: username,
                email: mail,
                password: password
            }
            axios.post(API_URL + '/user', submit)
                .then(response => {
                    alert('Inscription réussie');
                })
                .catch(error => {
                    console.log(error);
                })
        }
        catch (e) {
            alert(e);
        }
    }

    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <CustomButton title="Go to Login Screen" onPress={() => navigation.navigate('Test')} />
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Nom d'utilisateur"
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mail"
                    autoCompleteType="email"
                    inputMode="email"
                    onChangeText={(text) => setMail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mot de passe"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />
                <CustomButton title="S'inscrire" onPress={() => { handleSubmit() }} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: 300,
        marginBottom: 20
    }
});

export default RegisterScreen;