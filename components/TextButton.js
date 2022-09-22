import React from 'react';
import { TouchableOpacity, View, Text, Image, ScrollView } from 'react-native';

import { COLORS, FONTS } from '../constants';

const TextButton = ({
    buttonContainerStyle,
    disabled,
    label,
    labelStyle,
    label2 ="",
    label2Style,
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
            disabled = {disabled}
            onPress={onPress}
        >



            <Text style={{ color: COLORS.white, ...FONTS.h3, ...labelStyle }}>{label}</Text>
            {label2!="" && 
            <Text
            style={{ flex: 1, textAlign: 'center', color: COLORS.white,...FONTS.h3,...label2Style }}
            >
                {label2}
            </Text>
            }

        </TouchableOpacity>
    )
}

export default TextButton;