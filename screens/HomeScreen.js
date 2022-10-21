import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, Dimensions, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import coffees from "../const/coffee";

const width = Dimensions.get('screen').width/2-30;
const HomeScreen = () => {

    const Card = ({coffee}) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate("Details", coffee)}>
            <View style = {styles.card}>
                <View style ={{height: 100, alignItems: "center"}}>
                        <Image style={{flex:1, resizeMode:'contain'}} 
                        source={coffee.img} />
                </View>
                <Text style = {{fontWeight:'bold', fontSize:17,marginTop: 10, color:"white" }}>
                    {coffee.name}
                </Text>
                <View style ={{flexDirection: "row", justifyContent:"space-between", marginTop:5}}>
                    <Text style ={{fontSize:19, fontWeight:"bold", color:"yellow"}}>{coffee.price}$</Text>
                    <FontAwesome name="star" size={15} color="yellow" />
                    <FontAwesome name="star" size={15} color="yellow" />
                    <FontAwesome name="star" size={15} color="yellow" />
                    <FontAwesome name="star" size={15} color="yellow" />
                    <FontAwesome name="star" size={15} color="white" />
                    
                </View>
        </View>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style = {{flex:1, paddingHorizontal:20, backgroundColor:"white"}}>
            <View style={styles.header}>
                    <Text style = {{color:'black', fontSize:20}}>Good morning, </Text>
                    <Text style = {{color:'black', fontWeight:'bold', fontSize:20}}>Indro!   </Text>
                    <Image style={{ resizeMode:'contain'}}  source={require('../assets/group_10.png')} />
            </View>
            <View style ={{marginTop:30, flexDirection:'row'}}>
                <View style={styles.searchContainer}>
                    <TextInput placeholder="Find the coffee for you !" style = {styles.input}></TextInput>
                </View>
                <View style = {styles.searchButton}>
                <FontAwesome name="search-plus" size={30} color="black" />
                </View>
            </View>
            <View style = {{marginTop:20,flexDirection:"row", justifyContent: "space-between"}}>
                <View>
                    <View style = {styles.title1}>
                        <View style ={styles.icon}>
                        <Feather name="coffee" size={24} color="black" />
                        </View>
                        <Text style ={{color: "white", fontSize:20, fontWeight:"bold"}}>Coffee</Text>
                    </View>
                </View>
                <View>
                    <View style = {styles.title2}>
                        <View style ={styles.icon}>
                        <Feather name="coffee" size={24} color="black" />
                        </View>
                        <Text style ={{color: "black", fontSize:20, fontWeight:"bold"}}>Snack</Text>
                    </View>
                </View>
            </View>
            <View style = {styles.container}>
                <Text style ={{flex:1, fontSize:15}}>50% Discount for All Purchase This Morning</Text>
                <Image style={{ resizeMode:'contain'}}  source={require('../assets/pngTree.png')} />
            </View>
            <View>
                <Text style = {{fontSize:30, fontWeight:"bold"}}>Recommendation</Text>
            </View>

            <FlatList 
                columnWrapperStyle = {{justifyContent: "space-between"}}
                showsVerticalScrollIndicator = {false}
                contentContainerStyle ={{
                    marginTop:10, 
                    paddingBottom :50
                }}
                numColumns={2} 
                data = {coffees} 
                renderItem={({item}) => {
                    return <Card coffee={item} />;
                }} />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop:30,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: "center",
    },
    searchContainer:{
        height: 50,
        backgroundColor: "#F1F1F1",
        borderWidth:1,
        borderRadius: 10,
        flex:1,
        flexDirection:"row",
        alignItems: "center"
    },
    input: {
        fontSize: 18,
        fontWeight:'bold',
        color:"dark",
        flex:1
    },
    searchButton:{
        marginLeft: 10,
        height:50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    title1: {
        flexDirection: "row",
        height: 60,
        width: 130,
        borderRadius: 40,
        backgroundColor: "#128f91",
        justifyContent: "space-between",
        alignItems: "center",
        padding:10
    },
    title2: {
        flexDirection: "row",
        height: 60,
        width: 130,
        borderRadius: 40,
        backgroundColor: "#b7dcde",
        justifyContent: "space-between",
        alignItems: "center",
        padding:10
    },
    icon:{
        borderWidth:1, 
        borderRadius: 100, 
        backgroundColor:"white",
        width:30,
        height:30,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        flexDirection: "row",
        marginTop:30,
        backgroundColor: "#eeeeee", 
        padding:20,
        height:150, 
        borderRadius:20,
        justifyContent: "space-between"
    },
    card: {
        height:200,
        backgroundColor: '#128f91',
        width,
        marginHorizontal: 2,
        borderRadius:10,
        marginBottom:20,
        padding:15
    }
    
})

export default HomeScreen;

