import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import settingsStyle from '../styles/settingsStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SettingsScreen = ({navigation}) => {
    const avatarURL = '#'
    
    const [username, setUsername] = useState('')

    // Still Under Development........(Last left here)

    return (
        <SafeAreaView>
            <ScrollView style={{height:'100%'}}>
                <View>
                    <Image style={styles.avatar}  />
                    <TextInput value={username} onChangeText={setUsername} style={styles.usernameText} placeholder={username} placeholderTextColor='black' />
                    <TouchableOpacity onPress={() => {console.log(username)}}><Text>PRINT NAME</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create(settingsStyle)

export default SettingsScreen;
