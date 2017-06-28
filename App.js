import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firebase from 'firebase';

const initialState={};

class App extends React.Component{
  componentWillMount(){
    var config = {
      apiKey: "AIzaSyBHMEIacNLH96rpl9P9Xa8WSBFkUYPbC5Y",
      authDomain: "lap2project-a3f29.firebaseapp.com",
      databaseURL: "https://lap2project-a3f29.firebaseio.com",
      projectId: "lap2project-a3f29",
      storageBucket: "lap2project-a3f29.appspot.com",
      messagingSenderId: "244675529880"
    };
    firebase.initializeApp(config);
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
