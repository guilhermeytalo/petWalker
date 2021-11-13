import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
} from 'react-native';

// import  { Button }  from '../../components/button';

import colors from '../../styles/color';
import fonts from '../../styles/fonts';
import color from '../../styles/color';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import { EmailLogin } from './emailLogin';

import { useNavigation } from '@react-navigation/core';
import { RootStackParamsList } from '../../routes/stack.routes'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type loginSreenProp = NativeStackNavigationProp<RootStackParamsList, "Login">

export default function Login(){
    const navigation = useNavigation<loginSreenProp>();

    function emailLogin(): void {
        console.log('login with email')
        navigation.navigate('EmailLogin');
    }

    function facebookLogin() {
        navigation.navigate('FacebookLogin');
    }

    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                style={styles.container} 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>

                        <View style={styles.form}>
                            <View style={styles.mailLogin}>
                                <TouchableOpacity 
                                style={styles.mailLoginBtn} 
                                onPress={emailLogin}
                                >
                                    <Text style={styles.subtitle}>Login with e-mail</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.facebookLogin}>
                                <TouchableOpacity 
                                style={styles.facebookLoginBtn} 
                                onPress={facebookLogin}
                                >
                                    <Text style={styles.subtitle}>Login with Facebook</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.footer}>
                                <Text style={styles.text}>Didn't have an account? 
                                    <Text style={{fontWeight: 'bold', color: colors.primary}}> Sign Up</Text> 
                                </Text>                                
                            </View>

                            <View style={styles.footer}>
                                <Text style={styles.text}>
                                    By continue you agree to our{'\n'}
                                    <Text style={{fontWeight: 'bold', color: colors.primary}}>Terms </Text> 
                                    {'&'}  
                                    <Text style={{fontWeight: 'bold', color: colors.primary}}> Privacy Policy</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.secondary
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
    },
    emoji: {
        fontSize: 44,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.primary,
        color: colors.black,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.primary,
        fontFamily: fonts.heading,
        marginTop: 20,
    },
    subtitle: {
        color: colors.white
    },
    text: {
        fontSize: 16,
        textAlign: 'center'
    },
    mailLogin: {
        width: '100%',   
    },
    mailLoginBtn: {
        backgroundColor: colors.primary,
        borderRadius: 30,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        paddingLeft: 20
    },
    facebookLogin: {
        width: '100%',
        marginTop: 20,
    },
    facebookLoginBtn: {
        backgroundColor: colors.faceBlue,        
        borderRadius: 30,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        paddingLeft: 20
    },
    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20,
    },
});