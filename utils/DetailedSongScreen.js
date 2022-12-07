import {WebView} from "react-native-webview";

const DetailedSongScreen = ({ navigation, route }) => { 
    return (
    <WebView source={{ uri: route.params.url }}/>
    );
}

export default DetailedSongScreen;