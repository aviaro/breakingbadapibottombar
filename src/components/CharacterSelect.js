import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
const CharacterSelect = (props) => {

    //Deceased
    //Alive

    //let statusColor = props.char.status == 'Deceased' ? '#880000' : '#99cc00';
    let statusColor = null;
    switch (props.char.status) {
        case 'Deceased':
            statusColor = '#880000';
            break;
        case 'Alive':
            statusColor = '#99cc00';
            break;
        case 'Unknown':
            statusColor = '#ffcc00';
            break;
    }


    return (
        
        <View style={{ flexDirection: 'row', paddingVertical: 10, backgroundColor: '#ffffff', marginBottom: 10, borderRadius: 12 }}>
            <View style={{ width: '30%' }}></View>
            <View style={{ width: '70%' }}>
                <Text style={{ fontSize: 16, fontWeight: '700' }}>{props.char.name}</Text>
                <Text>{props.char.nickname}</Text>
                {/* <Text style={{ color: statusColor }}>{props.char.status}</Text> */}
            </View>
        </View>
    )

}

export default CharacterSelect;