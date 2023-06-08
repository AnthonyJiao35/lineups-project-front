import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./CustomButton";

export const DataList = ({ data, object, ...otherProps }) => (
    <View style={styles.container}>
        <View style={styles.dataList}>
            {data.map((item, index) => (
                <View>
                    {Object.keys(item).map((key) => (
                        <View>
                            {key=="name" && <Text style={styles.label}>{item[key]}</Text>}
                        </View>
                    ))}
                </View>
            ))}
        </View>
    </View>
);
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

export default DataList;