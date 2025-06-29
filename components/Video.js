import { View, Text, Button } from 'react-native'
import React from 'react';
import { Video } from 'expo-av';

export default function Video(props) {
    const video= React.useRef(null);
    const secondvideo= React.useRef(null);
    const [status, setStatus]=React.useState({});
    const [statussecondvideo, setStatussecondvideo]=React.useState({});
  return (
    <View>
    <Video
    source={props.source}
    ref={props.ahsan}
    style={{flex:1, alignSelf:"stretch"}}
    useNativeControls
    isLooping
    onPlaybackStatusUpdate={setStatus}
    />
    <View style={{margin:16}}>
    <Button title='Play from 5s' onPress={()=> video.current.playfromPositionAsync(5000)} />
    <Button title={status.islooping? "Set not to loop": "Set to loop"} onPress={()=> video.current.setIsLoppingAsync(!status.islooping)} />
    </View>
    </View>
  );
};
