import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import TitledInput from './TitledInput';
import Spinner from './Spinner';
import moment from 'moment';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };
    onLoginPress() {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { this.setState({ error: '', loading: false }); })
            .catch(() => {
                //Login was not successful, let's create a new account
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => { this.setState({ error: '', loading: false }); })
                    .catch(() => {
                        this.setState({ error: 'Authentication failed.', loading: false });
                    });
            });
    }
    
    // ShowCurrentDate=()=>{
 
    //     var date = new Date().getDate();
    //     var month = new Date().getMonth() + 1;
   

   
    //    }

    renderButtonOrSpinner() {
        if (this.state.loading) {
            return <Spinner />;    
        }
        return <TouchableOpacity style={styles.loginButton} onPress={this.onLoginPress.bind(this)}>
            <Text style={{textAlign: 'center', color: '#fff', fontWeight: 'bold'}}>Log In</Text>
        </TouchableOpacity>;
    }
    render() {
        return (
            <View style={styles.containerStyle} > 
            <View style={{flex: 0.3}}>             
                    <Text style={styles.welcome}>Welcome</Text>
                    <Text style={styles.date}>{moment().format('ddd, Do MMM')}</Text>
            </View> 

            <View style={{flex: 0.2}}>

                    <TitledInput 
                        label='Email:'
                        placeholder='you@domain.com'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                    <TitledInput 
                        label='Password:'
                        autoCorrect={false}
                        placeholder='*******'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                    </View>

                    <View style={{flex: 0.2, marginTop: 30}}>                   
                        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                        {this.renderButtonOrSpinner()}
                    </View>

                    <View style={{flex: 0.17, marginBottom: 50, padding: 15}}>
                        <Text style={{textAlign: 'center',lineHeight: 22, color: '#A09FA4'}}>
                        In case you forget your password, please leave a message on <Text style={{color: '#ED4A4E', fontWeight: 'bold'}}>manan@mokko.io</Text> or you can call us at <Text style={{color: '#ED4A4E', fontWeight: 'bold'}}>+91-9879834162</Text>
                        </Text>
                    </View>
            </View>
        );
    }
}
const styles = {
    errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    welcome: {
        marginTop: 45,
        marginBottom: 10,
        marginLeft: 20,
        fontSize: 40,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 16,
        letterSpacing: 0.5,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    containerStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
    },
    loginButton: {
        backgroundColor: '#ED4A4E',
        width: '60%',
        alignSelf: 'center',
        padding: 15,
        borderRadius: 4,
        position: 'relative',
        elevation: 3
    }
   
};

export default LoginForm;