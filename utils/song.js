import { StyleSheet, View, Image, SafeAreaView, Text } from "react-native";
import { millisToMinutesAndSeconds } from "./index";

export default function SongItem( {cover, title, artist, albumname, duration, index} ) {
    const songlength = millisToMinutesAndSeconds(duration);  
    console.log(cover)
    return (
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
    )
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
  });