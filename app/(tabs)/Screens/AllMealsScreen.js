import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
// import {CATEGORY} from "../../../Data/DummyData";
import { ALLMEALS } from '@/Data/DummyData';
import AllVideoDetailScreen from './AllVideoDetailScreen';

const AllMealsScreen=(props)=>{
  const CatId=props.route.params.catid;
  const MyMeals=ALLMEALS.filter((item)=> item.catid == CatId);
  return (
    <View style={{marginHorizontal:10, marginTop:5}}>
    <FlatList
    data={MyMeals}
    keyExtractor={(item,index) =>index.toString()}
    renderItem={(itemData)=>{
        return(
            <TouchableOpacity 
            onPress={()=>{
              props.navigation.navigate("AllVideoDetailScreen",{
                mealsdata: itemData.item,
              });
            }}
            style={{height:120, width:'95%', margin:11, borderRadius:22}}>
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
export default AllMealsScreen;