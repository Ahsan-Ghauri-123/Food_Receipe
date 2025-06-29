import { View, Text, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import {CATEGORY} from "../../../Data/DummyData";

const HomeScreen=(props)=>{
  return (
    <View style={{marginHorizontal:10, marginTop:5}}>
    <FlatList
    data={CATEGORY}
    numColumns={2}
    keyExtractor={(item,index) =>index.toString()}
    renderItem={(itemData)=>{
        return(
            <TouchableOpacity 
            onPress={()=>{
              props.navigation.navigate("AllMealsScreen",{
                catid: itemData.item.id,
              });
            }}
            style={{height:150, width:'45%', margin:11, borderRadius:22}}>
            <ImageBackground 
            borderRadius={22}
            source={{uri: itemData.item.image}} style={{height:"100%", width:"100%", justifyContent:"flex-end", overflow:"hidden"}}>
            <View style={{height:"100%", width:"100%", backgroundColor:"#00000082", borderRadius:20, justifyContent:"flex-end"}}>
            <Text style={{fontSize:19, fontWeight:"condensedBold", color:"red", textAlign:"center"}}>{itemData.item.name}</Text>
            </View>
            </ImageBackground>
            </TouchableOpacity>
        )
    }}
    />
    </View>
  );
};
export default HomeScreen;