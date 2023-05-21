import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import settingsStyle from '../styles/settingsStyle';

const SettingsScreen = ({navigation}) => {
    const avatarURL = 'https://plus.unsplash.com/premium_photo-1683817397956-b46614758fb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    
    const [username, setUsername] = useState('')



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
