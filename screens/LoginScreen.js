import React from 'react';
import {StyleSheet, Text, AsyncStorage, TouchableOpacity, Alert, TextInput, View, ImageBackground} from 'react-native';
import firebase from 'firebase';
import User from '../User';
import styles from '../constants/styles';
import Logo from '../constants/Logo';
import BG from '../images/sky.jpg';
export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header:null
    }
    state = {
        phone: '',
        name: '',
        email: '',
        password: '',
        loading: false
    }

    handleChange = key => val => {
        this.setState({ [key]: val})
    }


    onBottomPress = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.onLoginSuccess)
        .catch(err => {
            this.setState({
                error: err.message
            })
        })
    }
    
    onLoginSuccess = () => {
    this.setState({
        error: '',
        loading: false
    })
    User.name = this.state.name;
    User.phone = this.state.phone;
    if(User.phone !== firebase.database().ref('users/' + this.state.phone) && 
    User.name !== firebase.database().ref('users/' + this.state.name)){
        firebase.database().ref('users/' + this.state.phone).set({phone: this.state.phone});
        this.props.navigation.navigate('App');
    }
}
    render() {
        return (
        <ImageBackground style={styles.container} source={BG} >
            <View style={styles.container}>
            <View style={{marginBottom: 40}} >
                <Logo />
            </View>
                <TextInput
                    placeholder="Phone number"
                    keyboardType="number-pad"
                    style={styles.input}
                    value={this.state.phone}
                    onChangeText={phone => this.setState({phone})}
                />

                <TextInput
                    placeholder="Name"
                    style={styles.input}
                    value={this.state.name}
                    onChangeText={name => this.setState({name})}
                />

                <TextInput 
                    placeholder="Email" 
                    keyboardType="email-address"
                    style={styles.input} 
                    value={this.state.email} 
                    onChangeText={email => this.setState({email})}
                />

                <TextInput 
                    placeholder="password" 
                    secureTextEntry
                    style={styles.input} 
                    value={this.state.password} 
                    onChangeText={password => this.setState({password})}
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={this.onBottomPress}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.errorText}>
                    {this.state.error}
                </Text>
            </View>
        </ImageBackground>
        );
    }
    }