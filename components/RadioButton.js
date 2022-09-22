import React from 'react'
import { 
    TouchableOpacity, 
    Text,
    Imaage

 } from 'react-native'

 import {FONTS, SIZES, COLORS, icons } from '../constants';

 const RadioButton = ({ 
    containerStyle,
    labelStyle,
    label,
    iconStyle,
    isSelected,
    onPress
}) => {
return(

    <TouchableOpacity 
    style ={{ 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...containerStyle

    }}
    onPress = {onPress}>
        <Image
        source = {isSelected ? icons.check_on : icons.check_off}
        style = {{ 
            marginLeft:5,
            width : 20 , 
            height : 20,
            ...iconStyle
        }}

        >
            <Text
            style = {{ 
                marginLeft : SIZES.radius,
                color :COLORS.gray,
                ...FONTS.body3, ...labelStyle

            }}
            ></Text>

        </Image>
    </TouchableOpacity>
)

}
export default RadioButton;