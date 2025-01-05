import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function Profile({user}){
    return(
        <View style={styles.container}>
            <View style={styles.banner}>
                <Image
                    style={styles.image}
                    source={require('../assets/Logo.png')}/>
            </View>
            <View style={styles.imageCard}>
                <Text>This is Profile Screen {user.name}</Text>
            </View>
        </View>
    )
}
const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    banner:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },  
    image:{
        flex:1,
        width:250,
        height:65,
        top:10,
        position:'absolute',
    },
    imageCard:{
        flex:2
    }
});