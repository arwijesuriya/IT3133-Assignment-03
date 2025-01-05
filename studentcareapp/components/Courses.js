import { Image, StyleSheet, View, Text } from "react-native";

export default function Courses({user}){
    return(
        <View style={styles.container}>
            <View style={styles.banner}>
                <Image
                    style={styles.image}
                    source={require('../assets/Logo.png')}/>
            </View>
            <View style={styles.imageCard}>
                <Card style={{backgroundColor:"#ffffff"}}>
                    <Card.Content>
                        <Text variant="titleLarge" style={styles.nametext}>
                            {userCourse.name}
                        </Text>
                        <Text variant="bodyMedium" style={{textAlign:'center'}}>
                            Code: {userCourse.course_code} | Dept: {userCourse.department}
                        </Text>
                        <View style={styles.divider} />
                        <Text variant="titleLarge" style={styles.cardtitletext}>
                            Course Information
                        </Text>
                        <Text variant="bodyMedium">Code: {userCourse.course_code}</Text>
                        <Text variant="bodyMedium">Department: {userCourse.department}</Text>
                        <Text variant="bodyMedium">Duration: {userCourse.duration}</Text>
                        <Text variant="bodyMedium">Description: {userCourse.description}</Text>
                        <View style={styles.divider} />
                    </Card.Content>
                </Card>
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