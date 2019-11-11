import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MainView = () => {
    return (
        <View style={styles.MainView}>
            <Text>MainView</Text>
        </View>
    )
}

export default MainView;


const styles = StyleSheet.create({
    MainView:{
        alignContent:'center',
        justifyContent:'center'
    }
})