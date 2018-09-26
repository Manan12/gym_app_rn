import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';


const TitledInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {

    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                underlineColorAndroid='transparent'
                autoCorrect={false}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 2,
        color: '#A09FA4',
        fontSize: 16,
        fontWeight: '200',
        borderBottomWidth: 1,
        borderBottomColor: '#F7F6FC',
        letterSpacing: 0.5,

        
    },
    labelStyle: {
        fontSize: 12,
        color: '#202021',
        fontWeight: '200',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 15
    },
    containerStyle: {
       display: 'flex',
       flexDirection: 'column',
       paddingTop: 10,
       paddingBottom: 15,
       paddingLeft: 20,
       paddingRight: 20,
       width: 450,
       maxWidth: '100%',
       alignSelf: 'center'
       
       
    }
};

export default TitledInput;