import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

const SplashScreen = (props) => {
  return (
    <View style={{flex:1, backgroundColor:"white"}}>
      <View>
        <ImageBackground source={require("../../../assets/images/food.jpg")} style={{height:"100%", width:"100%"}}>
        <Text style={{fontSize:36, fontWeight:"bold", color:"white", textAlign:"center", marginTop:311}}>Cooking Experience Like a Chef</Text>
        <Text style={{fontSize:20, fontWeight:"bold", color:"white", textAlign:"center", marginTop:55}}>let's make an delicious dish with the best recipe for the family</Text>
        <View style={{height:90, width:180, backgroundColor:"#4DBAF4", justifyContent:"center", alignItems:"center", marginHorizontal:80, marginTop:44, borderRadius:37}}>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <View style={{height:50, width:55, backgroundColor:"white", marginRight:-2, borderRadius:22, justifyContent:"center", alignItems:"center"}}>
        <TouchableOpacity>
        <AntDesign name="arrowright" color="#4DBAF4" size={29} onPress={()=>{
            props.navigation.replace("HomeScreen");
        }}/>
        </TouchableOpacity>
        </View>
        <Text style={{margin:10, fontSize:19, fontWeight:"bold", color:"white"}}>Get Started</Text>
        </View>
        </View>
        </ImageBackground>
      </View>
    </View>
  );
};
export default SplashScreen;