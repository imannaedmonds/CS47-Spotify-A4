import { StyleSheet, SafeAreaView, FlatList, Text, Image, TouchableOpacity, ScrollView, View } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import { AccessTokenRequest } from "expo-auth-session";
import {Images} from "./assets/Themes/index";
import SongItem from "./utils/song";

const AuthButton = ({ authFunction }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={authFunction}>
      <Image source={Images.spotify} style={styles.imageLogo} />
      <Text style={styles.authButton}> CONNECT WITH SPOTIFY</Text>
    </TouchableOpacity>
  )
}

const renderSongItem = ({ item, index }) => {
  return(
  <SongItem
    index={index + 1}
    albumname={item.album.name}
    cover={item.album.images[0].url}
    title={item.name}
    artist={item.artists[0].name}
    duration={item.duration_ms}
  />
  ) 
}


const SongFlatList = ({tracks}) => {
  //render items with album image, song title, song artist, song album, song duration, and song index
 //console.log(tracks)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={Images.spotify} style={styles.logo} />
        <Text style={styles.headerText}>My Top Tracks</Text>
      </View>
      <FlatList
        data={tracks}
        renderItem={(item) => renderSongItem(item)}
        keyExtractor={(_, index) => index}
      />
      {/* <Text style={{color: 'black', fontSize: 48, marginTop: 123}}>Authenticated</Text> */}
    </SafeAreaView>
  )
}


export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  // token: Boolean - authenticated or not
  // tracks: [{}] - tracks
  // getSpotifyAuth - function
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(); // static line

  //console.log(token);
  //console.log(tracks[0].name);
  // if token is True, render FlatList
  // else, render Authentication button

  let contentDisplayed;
  if (token) {
  // render Flatlist
    contentDisplayed = <SongFlatList tracks = {tracks}/>;

  } else {
  // render AuthButton
    contentDisplayed = <AuthButton authFunction = {getSpotifyAuth} />;
  }
  return (
    <SafeAreaView style = {styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  button: {
    borderRadius: '100%',
    height: 60,
    width: 250,
    backgroundColor: 'green',
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  header: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },

  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    padding:10, 
  },
  
  logo: {
    height: 35,
    width: 35,
    marginRight: 5,
  },

  imageLogo: {
    height: 30,
    width: 30,

    marginRight: 6, 
  },

  authButton:{
    color: 'white',
    fontWeight: 'bold',
  }

})
