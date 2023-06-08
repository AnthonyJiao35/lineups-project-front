import axios from 'axios';
import React, { createContext, useState } from 'react';
import { API_URL } from './constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

// Création du contexte
const AuthContext = createContext();

// Création du fournisseur du contexte
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigation = useNavigation();

    const login = (mail, password) => {
        try {
            if (!mail) throw new Error("Veuillez entrer un mail");
            if (!password) throw new Error("Veuillez entrer un mot de passe");
            const submit = {
                email: mail,
                password: password
            }
            axios.post(API_URL + '/login', submit)
                .then(response => {
                    if (response?.data?.user?.username) alert('Bonjour ' + response?.data?.user?.username);
                    navigation.navigate('Main');
                })
                .catch(error => {
                    console.log(error);
                })
        }
        catch (e) {
            alert(e);
        }
        const user = { mail, password };
        setUser(user);
    };

    // Fonction pour déconnecter l'utilisateur
    const logout = () => {
        axios.post(API_URL + '/logout')
            .then(() => {
                AsyncStorage.getItem('token').then((token) => {
                    AsyncStorage.removeItem('token');
                    navigation.navigate('LoginOrRegister');
                });
            })
            .catch((err) => {
                alert(err);
            });
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };