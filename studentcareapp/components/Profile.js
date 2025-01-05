import React from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { Avatar, Card } from "react-native-paper";

export default function Profile({ user }) {
    return (
        <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.container}>
            <View style={styles.banner}>
                <Image style={styles.image} source={require("../assets/Logo.png")} />
            </View>
            <View style={styles.card}>
                <Card  style={{backgroundColor:"#ffffff"}}>
                    <Card.Content>
                        <View style={{ alignItems: "center" }}>
                            <Avatar.Image size={150} source={user.profile_pic}/>
                        </View>
                        <Text variant="titleLarge" style={styles.nametext}>
                            {user.name}
                        </Text>
                        <Text variant="bodyMedium" style={{textAlign:'center'}}>
                            Age: {user.age} | Gender: {user.gender}
                        </Text>
                    </Card.Content>
                </Card>
            </View>
            <View style={styles.card}>
                <Card style={{backgroundColor:"#ffffff"}}>
                    <Card.Content>
                        <Text variant="titleLarge" style={styles.cardtitletext}>
                            Contact Information
                        </Text>
                        <Text variant="bodyMedium">Email: {user.email}</Text>
                        <Text variant="bodyMedium">Phone: {user.phone}</Text>
                        <Text variant="bodyMedium">Address: {user.address}</Text>
                    </Card.Content>
                </Card>
            </View>
            <View style={styles.card}>
                <Card style={{backgroundColor:"#ffffff"}}>
                    <Card.Content>
                        <Text variant="titleLarge" style={styles.cardtitletext}>
                            Biological Information
                        </Text>
                        <Text variant="bodyMedium">Gender: {user.gender}</Text>
                        <Text variant="bodyMedium">Age: {user.age}</Text>
                        <Text variant="bodyMedium">Blood Group: {user.blood_group}</Text>
                    </Card.Content>
                </Card>
            </View>
            <View style={styles.footer}>
                <Text style={{color: "#ffffff"}}>UoV © 2025</Text>
            </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    banner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        flex: 1,
        width: 250,
        height: 65,
        top: 10,
        position: 'absolute',
    },
        imageCard: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    footer:{
        flex:1,
        bottom:0,
        position:"absolute",
        backgroundColor:"#520f4e",
        width:"100%",
        alignItems:'center',
        height:30
    },
    footerText:{
        color:'#ffffff'
    },
    propic: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
});