import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyAccountScreen from "./MyAccountScreen";
import HomeScreen from "./HomeScreen";
import TestScreen from "./TestScreen";
import LineUpsPage from "./LineUpsPage";
import AddLineUpsPage from "./AddLineUpsPage";

export const MainScreen = () => {
    const Tab = createBottomTabNavigator();


    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Accueil') {
                        iconName = 'home';
                    } else if (route.name === 'Utilisateur') {
                        iconName = 'person';
                    } else if (route.name === 'Test') {
                        iconName = 'settings';
                    }
                    else if (route.name === 'Ajouter') {
                        iconName = 'add-circle-sharp';
                    }
                    else if (route.name === 'Lineups') {
                        iconName = 'eye';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Accueil" component={HomeScreen} />
            <Tab.Screen name="Lineups" component={LineUpsPage} />
            <Tab.Screen name="Ajouter" component={AddLineUpsPage} />
            <Tab.Screen name="Test" component={TestScreen} />
            <Tab.Screen name="Utilisateur" component={MyAccountScreen} />
        </Tab.Navigator>
    );
}