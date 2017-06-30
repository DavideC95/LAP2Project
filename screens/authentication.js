import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Spinner }  from '../components/common/Spinner';
import { loginUser, goToLogin } from '../actions/authActions';
import { connect } from 'react-redux';

console.log("sono dentro Authentication.js");

class Authentication extends Component {
  static navigationOptions = {
    title: "Authentication"
  }

  renderLoginOrSpinner() {
    if (this.props.isLoading) {
      return <Spinner />
    }
    return (
      <Button onPress={()=> this.props.goToLogin({
          navigateTo: (screen) => this.props.navigation.navigate(screen)
        })}>
        Login
      </Button>
      /*
      <Button onPress={()=> this.props.navigation.navigate(LoginScreen)}>
        Register
      </Button>
      */
    )
  }

  render() {
    return (
      <View>
        <Text>
          Welcome to the Lap2Project!
        </Text>
      </View>
    );
  }
}

export default Authentication;
