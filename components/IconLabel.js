import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import { FONTS, COLORS, SIZES, icons, images, dummyData } from '../constants'


const IconLabel = ({ containerStyle, icon, iconStyle, label, labelStyle }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                paddingVertical: SIZES.base,
                paddingBottom: SIZES.radius,
                borderRadius: SIZES.radius,
                ...containerStyle
            }}
        >

            <Image
                source={icon}
                style={{
                    width: 30,
                    height: 30,
                    // tintColor: COLORS.white,
                    ...iconStyle
                }}
            />

            <Text
                style={{
                    marginLeft: SIZES.base,
                    // color: COLORS.white,
                    ...FONTS.body3,
                    ...labelStyle
                }}
            >{label}</Text>
        </View>
    )
}

export default IconLabel;