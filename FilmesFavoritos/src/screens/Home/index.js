import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>O que você deseja assitir?</Text>

            <View style={styles.containerInput} >
              <TextInput style={styles.textInput} placeholder="Pesquisar"></TextInput>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3A3F47',
        height: '100%',
        width: '100%',
        flex: 1
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '15%',
        marginLeft: '5%',
        color: 'white'
    },
    containerInput:{
        marginTop: '6%',
        backgroundColor:'#67686D',
        marginLeft: '5%',
        marginRight: '5%',
        borderBottomColor: 'white',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flex: 0.05  

    },
    textInput: {
        textAlign: 'justify',
        fontSize: 15,
        marginLeft: '3%',
        marginTop: '1%'
    }
})