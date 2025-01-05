import { Image, StyleSheet, View , Text} from "react-native";

export default function Subjects({user}){
    return(
        <View style={styles.container}>
            <View style={styles.banner}>
                <Image
                    style={styles.image}
                    source={require('../assets/Logo.png')}/>
            </View>
            <View style={styles.imageCard}>
                <Text>This is Subjects Screen</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>UOV © 2025</Text>
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
    }
});