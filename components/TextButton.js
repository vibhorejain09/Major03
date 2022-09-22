import React from 'react';
import { TouchableOpacity, View, Text, Image, ScrollView } from 'react-native';

import { COLORS, FONTS } from '../constants';

const TextButton = ({
    buttonContainerStyle,
    label,
    labelStyle,
    onPress
}) => {
    return (
        <TouchableOpacity
            style={{
                // height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                // borderRadius: SIZES.radius,
                backgroundColor: COLORS.primary,
                ...buttonContainerStyle
            }}
            onPress={onPress}
        >



            <Text style={{ color: COLORS.white, ...FONTS.h3, ...labelStyle }}>{label}</Text>


        </TouchableOpacity>
    )
}

export default TextButton;