import { View, Text, ScrollView, FlatList, Image, Dimensions } from 'react-native';
import React from 'react';
// import { Video } from 'expo-av';
// import YoutubePlayer from "react-native-youtube-iframe";

const AllVideoDetailScreen = (props) => {
  // const video= React.useRef(null);
  // const [status, setStatus]=React.useState({});
  // const video= React.useRef(null);
  // const secondvideo= React.useRef(null);
  // const [status, setStatus]=React.useState({});
  // const [statussecondvideo, setStatussecondvideo]=React.useState({});
  const MealsData=props.route.params.mealsdata;
  return (
    <ScrollView>
    <FlatList
    showsHorizontalScrollIndicator={false}
    horizontal={true}
    data={MealsData.imagesUrl}
    keyExtractor={(item, index)=> index.toString()}
    renderItem={(itemData)=>{
      return(
        <View style={{ shadowColor: "#000",
          shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 5, 
height:170, 
width:Dimensions.get("screen").width -22,
 marginHorizontal:10, 
 marginTop:10
}}>
        <Image
        style={{height:"100%", width:"100%"}}
        source={{uri: itemData.item.image}}
        borderRadius={22}
        />
        </View>
      )
    }}
    />
    <View style={{width:"100%", paddingHorizontal:10}}>
    <Text style={{fontSize:15, fontWeight:"bold", color:"blue", marginVertical:10}}>{`  Steps To Make ${MealsData.name}`}</Text>
    <View>
    {
      MealsData.steps.map((item)=>{
        return(
          <View 
          key={item.id}
          style={{width:"100%", marginBottom:10, padding:10 }}>
          <Text>{`* ${item.StepCount}`}</Text>
          <Text>{item.StepDescription}</Text>           
          </View>
        )
      })
    }
    </View>
    </View>
    <View>
    </View>
    </ScrollView>
  );
};

export default AllVideoDetailScreen;