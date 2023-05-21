import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import NavBarStyles from '../styles/NavBarStyles';
import Icon from '@expo/vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
    const navigation = useNavigation();
    const { options } = navigation;
    return (
        <>
            <View style={styles.navbar}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navbarButtons}>
                    <Icon  style={styles.navbarIcon} name='home' size={30} color={options?.navIconColor} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.navbarButtons}>
                    <Icon  style={styles.navbarIcon} name='settings' size={30} color={options?.navIconColor} />
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create(NavBarStyles)

export default NavBar;
