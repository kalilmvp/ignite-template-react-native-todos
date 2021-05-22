import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';

interface HeaderProps {
    changeTheme: () => void;
    darkTheme: boolean;
}

export function Header({ changeTheme, darkTheme }: HeaderProps) {
    return (
        <SafeAreaView style={ !darkTheme ? styles.container : styles.containerDark }>
            <View style={ !darkTheme ? styles.header : styles.headerDark }>
                <View style={ styles.todo}>
                    <Text style={ styles.headerText }>to.</Text>
                    <Text style={ [ styles.headerText, { fontFamily: 'Poppins-SemiBold' } ] }>do</Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={ changeTheme }
                        style={ styles.theme }
                    >
                        <Text style={styles.themeText}>Change Theme</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#273FAD',
    },
    containerDark: {
        backgroundColor: '#483C67',
    },
    header: {
        paddingBottom: 44,
        backgroundColor: '#273FAD',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerDark: {
        paddingTop: StatusBar.currentHeight,
        paddingBottom: 44,
        backgroundColor: '#483C67',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    todo: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 30
    },
    headerText: {
        fontSize: 24,
        color: '#FFF',
        fontFamily: 'Poppins-Regular',
    },
    theme: {
        marginRight: 10,
    },
    themeText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#A09CB1',
    }
});
