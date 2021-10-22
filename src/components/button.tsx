import React from 'react';
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    TouchableOpacityProps 
} from 'react-native';

import colors from '../styles/color'
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps){
    return(
        <TouchableOpacity 
            style={styles.container}
            {...rest}
        >
            <Text style={styles.text}>
                { title }
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    
    },    
    text: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.heading,
    }
})