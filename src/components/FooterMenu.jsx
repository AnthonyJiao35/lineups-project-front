import { ScrollView, Text } from "react-native";
import IconButton from "./IconButton";

export const FooterMenu = ({ navigation, ...otherProps }) => {
    if (!navigation) {
        return null;
    }

    return (
        <ScrollView {...otherProps}>
            <Text>Footer Menu</Text>
            {navigation.map((item, index) => {
                console.log(item);
                if (!item) return null;
                else return (<IconButton navigation={item} key={index} />)
            })}
        </ScrollView>
    );
};

export default FooterMenu;