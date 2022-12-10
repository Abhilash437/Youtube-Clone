// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
// import * as React from 'react';
import React from 'react';
import {WebView} from 'react-native-webview';

export default class App extends React.Component{
  render(){
    return (
      <WebView source={{uri:'https://main.d311vplgldpxgq.amplifyapp.com'}} style={{marginTop:35}}/>
    )
  }
}

