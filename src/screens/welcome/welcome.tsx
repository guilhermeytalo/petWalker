import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/core';

// import wateringImg from '../assets/watering.png';
// import colors from '../styles/colors';
// import fonts from '../styles/fonts';

// Feather.loadFont();

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    // navigation.navigate('UserIdentification');
  }

  return (
    <SafeAreaView>
      <View>
        <Text>
          Gerencie {'\n'}
          suas plantas de{'\n'}
          forma fácil
        </Text>
      </View>
    </SafeAreaView>
  );
}
