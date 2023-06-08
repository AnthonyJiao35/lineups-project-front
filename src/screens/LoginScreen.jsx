import { StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../components/CustomButton";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { AuthContext } from "../utils/AuthContext";

export const LoginScreen = ({ navigation }) => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const { login, user } = useContext(AuthContext);

    useLayoutEffect(() => {
        if (user) {
            navigation.navigate('Main');
        }
    }, [user, navigation]);

    const handleSubmit = () => {
        login(mail, password);
    }

    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <CustomButton title="Go to Login Screen" onPress={() => navigation.navigate('Main')} />
            <View>
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
                <CustomButton title="Se connecter" onPress={handleSubmit} />
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

export default LoginScreen;