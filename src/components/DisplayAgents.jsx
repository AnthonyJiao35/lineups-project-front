import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import CustomButton from "./CustomButton";
import { useEffect, useState } from "react";

export const DisplayAgents = ({ data, ...otherProps }) => {
    const [agentData, setAgentData] = useState();
    console.log(agentData)
    useEffect(() => {
        if (data) {
            const agents = data.map(agent => {
                const { displayName, displayIcon } = agent;
                return {
                    nom: displayName,
                    photo: displayIcon,
                };
            });
            setAgentData(agents);
        }
    }, [data]);

    return (
        <ScrollView style={styles.container}>
            {agentData && agentData.map((agent, index) => {
                const { nom, photo } = agent;
                return (
                    <View key={index} style={styles.row}>
                        <Image source={{ uri: photo }} style={styles.image} />
                        <Text>{nom}</Text>
                    </View>
                );
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        margin: 0,
        padding: 0,
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
        width: '100%',
        flexWrap: 'wrap',
    },
    dataList: {
        padding: 8,
    },
    image: {
        width: 50,
        height: 50,
    },
});

export default DisplayAgents;