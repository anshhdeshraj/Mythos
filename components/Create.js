import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import CreateStyles from '../styles/CreateStyles';
import { useNavigation } from '@react-navigation/native';

const Create = () => {
    const navigation = useNavigation();
    return (
        <>
        <TouchableOpacity onPress={() => navigation.navigate('Create Book')} style={styles.createButton}>
            <Text style={styles.createText}>+  Create Book</Text>
        </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create(CreateStyles)

export default Create;
