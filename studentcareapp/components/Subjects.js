import { Image, StyleSheet, View , Text} from "react-native";

export default function Subjects({user}){
    return(
        <View style={styles.container}>
            <View style={styles.banner}>
                <Image
                    style={styles.image}
                    source={require('../assets/Logo.png')}/>
            </View>
            <View style={styles.card}>
                <Card style={{backgroundColor:"#ffffff"}}>
                    <Card.Content>
                        <Text variant="titleLarge" style={styles.nametext}>
                            {userCourse.name}
                        </Text>
                        <Text variant="bodyMedium" style={{textAlign:'center'}}>
                            {userMarks.length} Subjects| Average
                        </Text>
                        <View style={styles.divider} />
                        <Text variant="titleLarge" style={styles.cardtitletext}>
                            Marks Information
                        </Text>
                        <Text style={{color:"#696665"}}>Subjects                                                                     marks</Text>
                        <View style={styles.divider} />
                        {
                            userMarks.map((item,index)=>(
                                <View style={styles.row} key={index}>
                                    <Text style={styles.subject}>{item.subjectName}</Text>
                                    <Text style={styles.mark}>{item.mark}</Text>
                                </View>
                            ))
                        }
                        <Text variant="bodyMedium">Code: {userCourse.course_code}</Text>
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