import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducers'; //Import del main reducer -> appReducer
import { logger } from 'redux-logger'
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { StackNavigator } from 'react-navigation';
import Authentication from './screens/authentication';
import LoginScreen from './screens/LoginScreen'

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

 render(){
    const store = createStore(
      appReducer,
      initialState,
      applyMiddleware(logger, ReduxThunk)
    );
    
    const MainNavigator = StackNavigator({
        authenticate: { screen: Authentication },
        login: { screen: LoginScreen },
        //register : { screen: RegisterScreen },
        //home: { screen: HomeScreen }
      }
    );

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default App;
