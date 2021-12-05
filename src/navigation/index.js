import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto'



//screens
//Characters 
import characterscreen , {screenoptions as characterscreenoptions} from '../Screens/characters/characters'
import characterdetailsscreen, {screenoptions as characterdetailsscreenoptions} from '../Screens/characters/characterdetails';
//quotes
import quotesscreen , {screenoptions as quotesscreenoptions} from '../Screens/quotes/quotes'
//episodes
import episodesscreen , {screenoptions as episodescreenoptions} from '../Screens/episodes/episodes'


//creating a stack for each screen

const characterstacknavigator = createStackNavigator();
export const characaterstack = () =>{
    return(
        <characterstacknavigator.Navigator>

            <characterstacknavigator.Screen name ='character' component={characterscreen} options ={characterscreenoptions}/>
            <characterstacknavigator.Screen name ='characterDetails' component={characterdetailsscreen} options ={characterdetailsscreenoptions}/>



        </characterstacknavigator.Navigator>
    )
}


const quotesscreennavigator = createStackNavigator();
export const quotesstack = () =>{
    return(
        <quotesscreennavigator.Navigator>

            <characterstacknavigator.Screen name ='quotes' component={quotesscreen} options ={quotesscreenoptions}/>


        </quotesscreennavigator.Navigator>
    )
}

const episodesscrennavigator = createStackNavigator();
export const episodesstack = () =>{
    return(
        <quotesscreennavigator.Navigator>

            <characterstacknavigator.Screen name ='episodes' component={episodesscreen} options ={episodescreenoptions}/>


        </quotesscreennavigator.Navigator>
    )
}


//creating a bottom bar navigator for the stack
const bottomnav =createMaterialBottomTabNavigator();
export const AppBottomBar = ()=>{
    return(
        <bottomnav.Navigator activeColor='#ffff' inactiveColo='#222222' barStyle={{backgroundColor:'#29773E'}}>

            <bottomnav.Screen options ={{tabBarLabel:'characters',
        
            tabBarIcon:() => (<Fontisto name='persons' size={26}/>)}} 
            name ='character' component ={characaterstack}  
            /> 
            <bottomnav.Screen options ={{tabBarLabel:'episodes',
            tabBarIcon:() => (<MaterialCommunityIcons name='movie' size = {26}/>)}}
            name = 'episodes' component={episodesstack}
            />
            <bottomnav.Screen options ={{tabBarLabel:'quotes',
            tabBarIcon:() => (<MaterialCommunityIcons name='movie' size = {26} />)}}
            name = 'quotes' component={quotesstack}
            />
           

        </bottomnav.Navigator>
    )
}

















