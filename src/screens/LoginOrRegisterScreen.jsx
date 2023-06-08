import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import { useContext, useEffect } from "react";
import { AuthContext } from "../utils/AuthContext";

export const LoginOrRegisterScreen = ({ navigation }) => {
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            navigation.navigate('Main');
        }
    }, [user, navigation]);
    
    return (
        <View style={styles.container}>
            <Text>Login/Register Screen</Text>
            <CustomButton title="Go to Register Screen" onPress={() => navigation.navigate('Register')} />
            <CustomButton title="Go to Login Screen" onPress={() => navigation.navigate('Login')} />
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
});

export default LoginOrRegisterScreen;