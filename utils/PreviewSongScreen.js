import {WebView} from "react-native-webview";

const PreviewSongScreen = ({ navigation, route }) => { 
    return (
    <WebView source={{ uri: route.params.url }}/>
    );
}

export default PreviewSongScreen;