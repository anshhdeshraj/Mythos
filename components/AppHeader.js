import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, StatusBar} from 'react-native';
import HeaderStyles from '../styles/HeaderStyles';

const AppHeader = (props) => {
    return (
        <View style={styles.headerContainer}>
            <SafeAreaView>
                <Text style={[styles.headerText, {paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0} ]}>{props.title}</Text>
            </SafeAreaView>
        </View>
);
}

const styles = StyleSheet.create(HeaderStyles)

export default AppHeader;
