import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, ScrollView, ActivityIndicator} from 'react-native';
import Header from '../components/AppHeader'
import Create from '../components/Create';
import Library from '../components/Library';

const HomeScreen = ({navigation}) => {
    return (
        <>
            <Header title="Mythos." /> 
            <ScrollView>
                <Create />
                <Library />
                <ActivityIndicator size={43} color='black' style={{display:'none', marginTop:200}} />
            </ScrollView>
        </>
    );
}


export default HomeScreen;
