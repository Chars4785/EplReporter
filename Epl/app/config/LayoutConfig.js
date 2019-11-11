import { Dimensions, Platform } from 'react-native'
import SafeArea from 'react-native-safe-area'

const screenDimensions = Dimensions.get('window');
const LayoutConfig = {
    SCREEN_WIDTH: screenDimensions.width,
    SCREEN_HEIGHT: screenDimensions.height,
    
    SCREEN_SAFE_TOP: 20,
    SCREEN_SAFE_BOTTOM: 20

}

if( Platform.OS === 'ios' ){
    SafeArea.getSafeAreaInsetsForRootView().then((result)=>{
        LayoutConfig.SCREEN_SAFE_TOP = result.safeAreaInsets.top;
        LayoutConfig.SCREEN_SAFE_BOTTOM = result.safeAreaInsets.bottom;
    })
}


export default LayoutConfig;