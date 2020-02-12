import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorText: {
        fontSize: 25,
        color: 'red',
        alignSelf: 'center',
        marginTop: 10
    },
    input: {
        height: 40,
        width: 370,
        alignSelf: 'center',
        backgroundColor: 'rgba(255,255,255,.5)',
        paddingLeft: 10,
        marginBottom: 15,
        borderRadius: 5,
        fontSize: 15,
    },
    inputMessage: {
        padding: 10,
        borderWidth:1,
        borderColor: '#ccc',
        width: '85%',
        marginBottom: 10,
        borderRadius: 20,
    },
    btnText: {
        color:'#000',
        fontSize:20
    },
    bottomBar: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        height: 60
    },
    sendButton: {
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 10,
        height: 40,
        width: 40,
        paddingTop: 10, 
        paddingLeft: 5,
        backgroundColor: '#2195F3',
        borderRadius: 20
    },
    buttonContainer: {
        backgroundColor: '#2195F3',
        padding: 15,
        borderRadius: 8,
        alignSelf: 'center'
    }
    });

export default styles