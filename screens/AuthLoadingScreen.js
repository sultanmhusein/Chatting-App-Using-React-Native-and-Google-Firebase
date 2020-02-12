import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';
import firebase from 'firebase';
import User from '../User';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }


  componentWillMount(){
    var firebaseConfig = {
        apiKey: "AIzaSyCweCSj-t1ynX7qUlrkg27GzQ2J5zzlGos",
        authDomain: "fir-chat-1b8b6.firebaseapp.com",
        databaseURL: "https://fir-chat-1b8b6.firebaseio.com",
        projectId: "fir-chat-1b8b6",
        storageBucket: "fir-chat-1b8b6.appspot.com",
        messagingSenderId: "795445771293",
        appId: "1:795445771293:web:c2f498c937354fb25d9af4"
      };
      // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
  }
  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    User.phone = await AsyncStorage.getItem('userPhone');
    this.props.navigation.navigate(User.phone ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
