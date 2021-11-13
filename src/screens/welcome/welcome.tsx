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

import dogImage from '../../assets/welcome-screen/welcome.jpg';
import colors from '../../styles/color';
import fonts from '../../styles/fonts';

// params para rotas v6
import { useNavigation } from '@react-navigation/native';
import { RootStackParamsList } from '../../routes/stack.routes'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
// import { Login } from '../login/login';

type welcomeSreenProp = NativeStackNavigationProp<RootStackParamsList, "Welcome">

export default function Welcome() {  
  const navigation = useNavigation<welcomeSreenProp>();

  function handleStart() {        
    navigation.navigate('Login');
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
                Let's teste
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
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    color: colors.white,
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
    borderRadius: 16,    
    width: 200,
    height: 56,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 35
  },
  buttonText: {
    fontSize: 18,
    fontFamily: fonts.complement,
    color: colors.white
  }
})
