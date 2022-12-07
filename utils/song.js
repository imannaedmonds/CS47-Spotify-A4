import { Image, SafeAreaView, Text, Pressable } from "react-native";
import { millisToMinutesAndSeconds } from "./index";
import DetailedSongScreen from "./DetailedSongScreen";
import PreviewSongScreen from "./PreviewSongScreen";
import 'react-native-gesture-handler';

export default function SongItem( {preview_url, external_url, cover, title, artist, albumname, duration, index} ) {
    const songlength = millisToMinutesAndSeconds(duration);  

    return (

        <Pressable style ={styles.itemContainer} onPress ={() => {
            navigation.navigate("DetailedSongScreen",{
                external_url: item.external_url.spotify
            });
        }}>

        <Pressable onPress = {(e) => {
            e.stopPropagayion();
            navigation.navigate("PreviewSongScreen",{
                preview_url: item.preview_url
            });
        }}>
            <Ionicons name = "play-circle" size ={25} color = "1DB954" />
            </Pressable>

        <SafeAreaView style = {styles.item}>
            <Text style = {styles.index}>{index}</Text>
            <Image style = {styles.image} source = {{uri: cover}}/>
            <SafeAreaView style = {styles.titleArtist}>
                <Text numberOfLines = {1} style = {{color:'white'}} >{title}</Text>
                <Text numberOfLines = {1} style = {{color: 'gray'}} >{artist}</Text>
            </SafeAreaView>
            <SafeAreaView style = {styles.albumduration}>
                <Text numberOfLines = {1} style = {styles.album} >{albumname}</Text>
                <Text style = {{color: 'gray', alignItems: 'flex-end'}}> {songlength}</Text>
            </SafeAreaView>
        </SafeAreaView>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    item: {
      flex: 1,
      flexDirection: 'row',
      marginBottom: 5,
    },
    index: {
        alignItems: "flex-start",
        flexDirection: 'row',
        color: 'gray',
        alignItems: "center",
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10, 
    },
    image: {
        width: 50, 
        height: 50,
        aspectRatio: 1,
        marginHorizontal: 2,
        alignItems: "center",
        justifyContent: 'center',
        marginRight: 10, 
    },
    albumduration: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 5,
    },
    album: {
        color: 'white',
        width: 90,
    },
    titleArtist: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginHorizontal: 2,
        width: "35%",
    },
    durationStyle: {
        color: 'gray',
        width: "7%",
        flexDirection: 'row',
    },

    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 19,
        flex: 1,
    },

  });