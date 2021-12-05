import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CharacterSelect from '../../components/CharacterSelect';

const characterdetailsscreen = () =>{
 <Text>characterdetails SCREEN</Text>
}




export const screenoptions = navdata =>{
    return{
        headerTitle:navData.route.params.goto.characterdetailsscreen
    }
}
export default characterdetailsscreen;