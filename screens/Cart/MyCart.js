//npm install  --save react-native-swipe-list-view
//55:22
import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import{
    Header,
    IconButton,
    CartQuantityButton,
    StepperInput,
    FooterTotal
}
from "react-native";

import { FONTS, SIZES, COLORS , icons , dummyData} from '../../constants';
const MyCart = ({ navigation }) => {
    
    const [myCartList, setMyCartList] = React.useState(dummyData.myCart)


    //handler 
    function updateQuantityHandler(newQty, id ) {
        const newMyCartList = myCartList.map(cl => (
            cl.id === id ? {...cl , qty : newQty} : cl
        ))
        setMyCartList(newMyCartList)
    }
    function removeMyCartHandler(id) {
        let newMyCartList = [...myCartList]
        newMyCartList.findIndex(cart => cart.id === id)
        newMyCartList.splice(index,1)
        newMyCartList(newMyCartList)
    }
    function renderHeader(){
        return (
            <Header
            title = "MY CART"
            containerStyle = {{
                height: 50,
                marginHorizontal:SIZES.padding,
                marginTop:40
            }}
            
                leftComponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius,
                            borderWidth: 1,
                            borderColor: COLORS.gray2
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2
                        }}  
                        onPress={() => navigation.goBack()}
                    />
                }
                rightComponent={
                    <CartQuantityButton
                        quantity={3}


                    />
                }
            
            />
        )       
    }
    
    function renderCartList(){
        return (
            <SwipeListView
            data = {mycartList}
            keyExtractor={item => `${item.id}`}
            contentContainerStyle ={{
                marginTop: SIZES.radius,
                paddingHorizontal:SIZES.padding,
                paddingBottom:SIZES.padding*2
            }}
            disableRightSwipe ={true}
            rightOpenValue={-75}
            renderItem={(data,rowMap)=>{
                <View
                styl={{
                    height:100,
                    backgroundColor:COLORS.lightGray2,...styles.cartItemContainer

                }}
                >
                    {/* Food Image */}
                <View
                    style={{
                        width:90,
                        height:100,
                        marginLeft : -10    
                    }}

                >
                    <Image 
                    source = {data.item.image}
                    resizeMode="contain"
                    style={{
                        width:"100%",
                        height:"100%",
                        position: "absolute",
                        top:10
                    }}
                    />
                </View>
                {/* Food Info */}
                <View
                style = {{
                    flex :1 , 
                }}>
                    <Text style={{...FONTS.body3}}>{data.item.name}</Text>
                   <Text style = {{color : COLORS.primary,...FONTS.h3}}>{data.item.price}</Text> 
                </View>

                {/* Quantity */}

                <StepperInput
                containerStyle={{
                    height : 50,
                    width :125,
                    backgroundColor :COLORS.white
                }}
                value={data.item.qty}
                onAdd={() => updateQuantityHandler(data.item.qty+1 , data.item.id)}
                onMinus={() => {
                    if(data.item.qty>1){
                        updateQuantityHandler(data.item.qty-1 , data.item.id)
                    }
                }}
                
                /> 

                </View>
            }}
            renderHiddenItem={(data,rowMap) => (
                <IconButton
                    containerStyle={{
                        flex : 1 ,
                        justifyContent : 'flex-end',
                        backgroundColor : COLORS.primary,...Styles.cartItemContainer
                    }}
                    icon = {icon.delete_icon}
                    iconStyle = {{
                        marginRight:10
                    }}
                    onPress={() => removeMyCartHandler(data.item.id)}
                    />
            )}
            />
        )
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor:COLORS.white
            }}

        >

            {/* header */}
            {renderHeader}
            {/* cart list */}
            {renderCartList}
            {/* Footer */}
            <FooterTotal 
            subtotal={36.97}
            shippingFee={0.00}
            total={37.97}
            onPress={()=>navigation.navigate("MyCard")}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    cartItemContainer:{ 
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:SIZES.radius,
        paddingHorizontal:SIZES.radius,
        borderRadius:SIZES.radius
    }
})
export default MyCart;