import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/core';
import { RootStackParamsList } from '../../routes/stack.routes'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type emailLoginSreenProp = NativeStackNavigationProp<RootStackParamsList, "EmailLogin">

export default function EmailLogin() {
    const navigation = useNavigation<emailLoginSreenProp>();

    return (
        <SafeAreaView>
            <View>
                <Text>
                    Login with email
                </Text>
            </View>
        </SafeAreaView>
    );
}