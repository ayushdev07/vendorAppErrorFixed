import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const SelectSuperVisorScreen = () =>{
    const[showList, setShowList] = useState(false);
    var names = [
        'Kartik',
        'Aman',
        'Arun',
        'Keerthi',
        'Prasad'
    ]
    const[chosenName, setChosenName] = useState('SupserVisor Name')
    const show=()=>{
        setShowList(!showList)
        if(showList==true)
        setChosenName('Supervisor Name')
        console.log(showList)
    }
    const renderNames=({item})=>{
        return (
            <View style={{marginStart:'5%' , marginBottom:20}} >
                <TouchableOpacity onPress={()=>{
                    setChosenName(item)
                    setShowList(!showList)
                }}>
                <Text style={{color:'#000000', fontSize:20, fontWeight:'bold'}} >{item}</Text>
                </TouchableOpacity>
            </View>
        )
        
    }
    const FlatListItemSeparator = () => {
        return (
          <View
            style={{
              height: 2,
              width: "100%",
              backgroundColor: "#ffffff",
            }}
          />
        );
      }
    return(
        <View style={{flex:1 , backgroundColor:'#ffffff'}} >
            <Text style={{marginTop:'15%', marginStart:'15%', fontSize:20, color:'#000000'}} > Assign To:</Text>
            <TouchableOpacity onPress={show} style={{marginTop:'10%'}} >
            <View style={styles.rect3} >
               
    <Text style={{alignSelf:'center',color:'#000000', fontSize:18, fontWeight:'bold'}} >{chosenName}</Text>
                <View style={{flex:1, flexDirection:'row'}} />
                <MaterialIcons name='keyboard-arrow-down' size={24} style={{margin:20}}/>
                
            </View>
            </TouchableOpacity>
            {
                showList?
                <View style={{ flex:1, marginTop:'5%', marginStart:'15%'}} >
                <FlatList
                data={names}
                renderItem={renderNames}
                ItemSeparatorComponent = { FlatListItemSeparator}
                />
            </View>
                :null
            }
        </View>
    )
}

const styles=StyleSheet.create(
   { 
    rect3: {
        width: "75%",
        height: 60,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "rgba(112,112,112,1)",
        borderStyle: "solid",
        borderRadius: 100,
        flexDirection: "row",
        paddingStart: 20,
        marginHorizontal:'15%',
        flexDirection:'row'
      },
    }
)

export default SelectSuperVisorScreen;