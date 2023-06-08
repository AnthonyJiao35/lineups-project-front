import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";

export const MyAccountScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  const { user } = useContext(AuthContext);

  if (!user) return navigation.navigate('LoginOrRegister');

  const handleLogout = () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <Text>My Account Screen</Text>
      <CustomButton title="Go to Test Screen" onPress={() => navigation.navigate('Test')} />
      <CustomButton title="Se Déconnecter" onPress={() => { handleLogout() }} />
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

export default MyAccountScreen;