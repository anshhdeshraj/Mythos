import React, {useState} from 'react';
import { Configuration, OpenAIApi } from 'openai';
import {View, StyleSheet, TouchableOpacity, Text, TextInput, ScrollView} from 'react-native';
import {Ionicons, MaterialCommunityIcons, AntDesign, Feather, Octicons} from '@expo/vector-icons';
import BookStyles from '../styles/BookStyles';


const CreateBook = ({navigation}) => {

    const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY';
    
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('')
    const [story, setStory] = useState('');

    async function generateBook() {
        const response = await fetch('YOUR_BACKEND_API_URL', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ desc }),
          });
      
          // Handle the response and extract the generated story
          const { generatedStory } = await response.json();
          setStory(generatedStory);
    }

    return (
        <ScrollView>
        
        <View style={styles.bookContainer}>
            <TouchableOpacity style={styles.bookCover}>
                <Octicons name='plus' size={52} color="grey" />
                <Text style={{color:'grey', fontSize:10, fontWeight:'700'}}>Select Book cover</Text>
            </TouchableOpacity>
            <View style={styles.bookDetailsContainer}>
                <TextInput 
                value={title}
                onChangeText={setTitle}
                spellCheck={false} 
                style={[styles.bookNameField, styles.inputField]}
                placeholder='Book Title' 
                />
                
            </View>
        </View>
            <TextInput 
                spellCheck={false}
                value={desc}
                onChangeText={setDesc} 
                style={[styles.bookDescField, styles.inputField]}
                placeholder='Book Description' 
                multiline={true}
                maxLength={500}
                />

        <View style={styles.buttonsContainer}>
            <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={[styles.postButtons, {backgroundColor:'#bd0000',}]}><Text style={styles.postButtonsText}>Cancel</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {
                generateBook();
            }} style={[styles.postButtons, {backgroundColor:'black',}]}><Text style={styles.postButtonsText}>Done</Text></TouchableOpacity>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create(BookStyles)

export default CreateBook;
