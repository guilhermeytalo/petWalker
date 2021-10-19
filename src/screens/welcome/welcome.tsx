import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/core';

import dogImage from "../../assets/welcome-screen/welcome.jpg";
import colors from '../../styles/color';
import fonts from '../../styles/fonts';

// Feather.loadFont();

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    console.log('caiu?');
    // navigation.navigate('UserIdentification');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <ImageBackground style={styles.image} source={dogImage} resizeMode="cover">
          <Text style={styles.title}>
            Welcome to{'\n'}
            PetWalk
          </Text>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={handleStart}>
              <Text style={styles.buttonText}>
                Let's Walk
              </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    color: colors.primary,
    marginTop: 38,
    marginLeft: 38,
    lineHeight: 34,
    fontFamily: fonts.heading,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  button: {    
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    // alignContent: 'space-around',
    // position: 'absolute',
    borderRadius: 16,    
    width: 200,
    height: 56,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: fonts.complement,
    color: colors.white
  }
})
