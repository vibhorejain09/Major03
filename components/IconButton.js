import React from 'react';

import { TouchableOpacity, View, Text, Image, ScrollView } from 'react-native';

import { Colors, SIZES, FONTS, icons, images, dummyData } from '../constants';


const IconButton = ({ containerStyle, icon, containerStyle, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                ...containerStyle
            }}
            onPress={onPress}
        >
            <Image
                source={icon}
                style={{
                    width: 30,
                    height: 30,
                    tintColor: COLORS.white,
                    ...iconStyle
                }}
            /></TouchableOpacity>

    )
}

export default IconButton;