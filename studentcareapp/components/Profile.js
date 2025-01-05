import { Image, StyleSheet, Text, View } from "react-native";

export default function Profile({ user }) {
    return (
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
            <View style={styles.imageCard}>
                <View>
                    <Image
                        style={styles.propic}
                        source={user.profile_pic}
                    />
                </View>
            </View>
            <View style={styles.footer}>
                    <Text style={styles.footerText}>UOV © 2025</Text>
            </View>
        </View>
    )
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