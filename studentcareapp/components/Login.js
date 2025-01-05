import { useNavigation } from "@react-navigation/native";
import { Button, PaperProvider, Text, TextInput } from "react-native-paper";
import { Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";

export default function Login() {
    const navigation = useNavigation();
    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.banner}>
                    <Image style={styles.image} source={require('../assets/Logo.png')}/>
                </View>
                <View style={styles.title}>
                    <Text style={styles.text}>Student Login</Text>
                </View>
                <View style={styles.inputfield}>
                    <TextInput label="Username" mode="outlined" activeOutlineColor="#63625b"/>
                    <TextInput label="Password" mode="outlined" activeOutlineColor="#63625b"/>
                </View>
                <View>
                    <Button mode="contained" onPress={() => navigation.navigate('Main')} labelStyle={styles.buttonText} >
                        Login
                    </Button>
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
    inputfield:{
        flex:1
    },
    banner:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    title:{
        flex:1
    },
    text: {
        color: "black",
        fontSize: 20,
        marginBottom: 20,
    },
    buttonText: {
        color: "black",
    },
    image:{
        flex:1,
        width:250,
        height:65,
        top:10,
        position:'absolute'
    },
    scrollView: {
        flexGrow: 1,
    },
});