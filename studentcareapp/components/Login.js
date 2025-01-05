import { useNavigation } from "@react-navigation/native";
import { Button, PaperProvider, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { Image, StyleSheet, View } from "react-native";

export default function Login() {
    const navigation = useNavigation();
    return (
        <PaperProvider>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../assets/Logo.png')}/>
                <Text style={styles.text}>Student Login</Text>
                <Button mode="contained"
                    onPress={() => navigation.navigate('Main')}
                    labelStyle={styles.buttonText}
                >
                    Login
                </Button>
            </View>
        </PaperProvider>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    text: {
        color: "black",
        fontSize: 20,
        marginBottom: 20,
    },
    buttonText: {
        color: "black",
    },
});