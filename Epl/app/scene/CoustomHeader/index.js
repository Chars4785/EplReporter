import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import Images from '@asset/images';
import LayoutConfig from '../../config/LayoutConfig'


const CoustomHeader = () => {
    return (
        <View style={ style.headerView }>
            <View>
                <Text style={ style.headerTitle }>Epl</Text>
            </View>
            <ScrollView  
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                 <TouchableOpacity>
                        <Image style={style.markImage} source={Images.LiverPool}/>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default CoustomHeader

const style = StyleSheet.create({
    headerView :{
        paddingTop: 20,
        paddingBottom: 0,
        height: LayoutConfig.SCREEN_HEIGHT / 10,
        borderWidth: 1,
        borderColor: 'black'
    },
    headerTitle: {
        
    },
    markImage: {
        width: 50,
        height: 50,
    }


})