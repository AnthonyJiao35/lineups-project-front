import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import FooterMenu from "../components/FooterMenu";

export const HomeScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
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
    count: {
      borderWidth: 1,
      padding: 8,
    },
    countText: {
      fontWeight: 'bold',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 8,
    },
    dataList: {
      padding: 8,
    },
  });
  
export default HomeScreen;