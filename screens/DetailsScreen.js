import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';

const DetailScreen = ({navigation, route}) => {
    const coffee = route.params;
    return (
        
        <SafeAreaView style ={{flex:1, backgroundColor: "#128f91"}}>
            <View style ={styles.header}>
                <AntDesign name="arrowleft" size={28} color="white" onPress={() => navigation.goBack()} />
                <Text style ={{fontSize:22, fontWeight:'bold',color:"white"}}>Item Details</Text>
                <AntDesign name="heart" size={24} color="white" />
            </View>
            <View style ={{marginTop:20, flexDirection:'column', justifyContent:"space-between", alignItems:'center'}}>
                <Text style ={{fontSize:30, fontWeight:'bold',color:"white"}}>{coffee.name}</Text>
                <Text style = {{ color:"yellow", fontSize:30, fontWeight:"bold"}}>{coffee.price}$</Text>
            </View>
            <View style ={{marginTop:20, flexDirection:'row', justifyContent:"space-between", alignItems:'center'}}>
                <View style ={styles.btnSize}>
                    <Image style={{ resizeMode:'contain',marginTop:20}}  source={require('../assets/S.png')} />
                    <Image style={{ resizeMode:'contain',marginTop:20}}  source={require('../assets/M.png')} />
                    <Image style={{ resizeMode:'contain',marginTop:20}}  source={require('../assets/L.png')} />
                </View>
                <View style ={{flex:1, flexDirection: "column"}}>
                    <Image style={{resizeMode:'contain', marginLeft:80}} source={coffee.img} />
                    <View style ={{flexDirection: "row"}}>
                    <Image style={{resizeMode:'contain', marginLeft:50}} source={require('../assets/minus.png')} />
                    <Text style ={{fontSize:30, fontWeight:'bold',color:"white",marginLeft:20}}>3</Text>
                    <Image style={{resizeMode:'contain', marginLeft:20}} source={require('../assets/plus.png')} />
                    </View>
                </View>
            </View>
            <View style = {{marginTop:30, justifyContent: "center",alignItems:"center"}}>
                <Text style ={{fontSize:30, fontWeight:'bold',color:"white"}}>{coffee.about}</Text>
            </View>
            <View style = {styles.buyBtn}>
                        <Text style ={{color: 'white', fontSize: 18, fontWeight:'bold' }} >
                            Add to Cart
                        </Text>
                    </View>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    btnSize:{
        padding:30,
    },
    buyBtn: {
        marginTop:30,
        padding:10,
        width:"100%",
        height:50,
        backgroundColor: "#ff620b",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    }
    
});

export default DetailScreen;