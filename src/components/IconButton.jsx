import { StyleSheet, View } from "react-native";

export const IconButton = ({ icon, navigation, ...otherProps }) => (
    <View onPress={() => navigation} />
)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        width:50,
        height:50,
    },
});
export default IconButton;