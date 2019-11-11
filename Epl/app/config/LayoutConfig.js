import { Dimensions } from 'react-native'

const screenDimensions = Dimensions.get('window');
const LayoutConfig = {
    SCREEN_WIDTH: screenDimensions.width,
    SCREEN_HEIGHT: screenDimensions.height,

}

export default LayoutConfig;