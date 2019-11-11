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
                <TouchableOpacity>
                        <Image style={style.markImage} source={Images.Mancity}/>
                </TouchableOpacity>
                <TouchableOpacity>
                        <Image style={style.markImage} source={Images.Chelsea}/>
                </TouchableOpacity>
                <TouchableOpacity>
                        <Image style={style.markImage} source={Images.Arsenal}/>
                </TouchableOpacity>
                <TouchableOpacity>
                        <Image style={style.markImage} source={Images.Sheffield}/>
                </TouchableOpacity>
                <TouchableOpacity>
                        <Image style={style.markImage} source={Images.Bournemouth}/>
                </TouchableOpacity>
                <TouchableOpacity>
                        <Image style={style.markImage} source={Images.Manutd}/>
                </TouchableOpacity>
                <TouchableOpacity>
                        <Image style={style.markImage} source={Images.Brighton}/>
                </TouchableOpacity>
                <TouchableOpacity>
                        <Image style={style.markImage} source={Images.AstonVila}/>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default CoustomHeader

const style = StyleSheet.create({
    headerView :{
        flexDirection: 'column',
        paddingTop: 30,
        paddingBottom: 0,
        height: LayoutConfig.SCREEN_SAFE_TOP + 80,
        borderWidth: 1,
        borderColor: 'black'
    },
    headerTitle: {
        textAlign:'center'
    },
    markImage: {
        width: 50,
        height: 50,
    }
})