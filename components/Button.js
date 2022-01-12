import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
    const { title = '-', color } = props;
    return (
        <Pressable style={styles.button(color)}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: color => ({
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 12,
        width: 70,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: color,
        opacity: .5
    }),
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});