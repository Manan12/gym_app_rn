import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Config from 'react-native-config';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
          apiKey: 'AIzaSyAfrzh2E5uHiBsxXdBAZCOvbnMNKoQ14Fg',
          authDomain: 'gymapp-657a8.firebaseapp.com',
          databaseURL: 'https://gymapp-657a8.firebaseio.com',
          projectId: 'gymapp-657a8',
          storageBucket: 'gymapp-657a8.appspot.com',
          messagingSenderId: '70235528306'
                
        });
    }
    render() {
        return (
            <View>
                <LoginForm />
            </View>
        );
    }
}

export default App;