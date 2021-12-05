import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,ActivityIndicator,FlatList} from 'react-native';
import CharacterSelect from '../../components/CharacterSelect';


const characterscreen =(props) => {

    const baseUrl = 'https://www.breakingbadapi.com/api/characters';
    const [serverData, setServerData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    const getData = async () => {
      setIsLoading(true);
      const response = await fetch(baseUrl, {
        method: 'GET'
      });
      const newData = await response.json();
      setServerData(newData);
      console.log(serverData);
      setIsLoading(false);
    }
  
    return (
      <View style={styles.container}>
        {
          isLoading
            ?
            (
              <ActivityIndicator color='#ffcc00' size='large' />
            )
            :
            (
              <View style={{ flex: 1 }}>
                <View style={{ height: '90%', width: '100%' }}>
  
                  {
                    serverData.length > 0 ? (
                        <TouchableOpacity onPress={() =>{props.navigation.navigate,('characterDetails',{stam: CharacterSelect.Item})}} > 
                      <FlatList
                        data={serverData}
                        keyExtractor={item => item.char_id}
                        renderItem={characterItem => <CharacterSelect 
                          char = {characterItem.item}
                          />} 
                          
                      />
                      </TouchableOpacity >
                    ) : (
                      <Text>No data exist</Text>
                    )
                   
                  }
  
                </View>
                <View style={{ height: '10%', width: '100%' }}>
                  <TouchableOpacity style={styles.btnContainer} onPress={getData}>
                    <Text>Get Data</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
        }
      </View>
    );
  }



 

export const screenoptions = newData =>{
    return{
        headerTitle:'Characters'
    }
}
export default characterscreen;



const styles = StyleSheet.create({
    btnContainer: { width: '100%', paddingVertical: 30, backgroundColor: '#ffcc00', alignItems: 'center',borderRadius:10 },
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#ebebeb',
      
      
    },
  });
  