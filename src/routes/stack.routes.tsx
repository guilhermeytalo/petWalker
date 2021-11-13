// react import
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


// screens
import Welcome from '../screens/welcome/welcome';
import Login from '../screens/login/login';
import EmailLogin from '../screens/emailLogin/emailLogin';

const Stack = createNativeStackNavigator();    

export type RootStackParamsList = {
    Welcome: undefined
    Login: undefined
    EmailLogin: undefined
    FacebookLogin: undefined
}

const AppRoutes: React.FC = () => (
    <Stack.Navigator 
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="EmailLogin" component={EmailLogin} />
    </Stack.Navigator>
)

export default AppRoutes;