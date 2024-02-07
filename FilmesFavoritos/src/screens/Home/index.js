import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>O que você deseja assitir?</Text>

            <View style={styles.containerInput} >
              <TextInput placeholder="Pesquisar"></TextInput>
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
        marginTop: '10%',
        marginLeft: '5%',
        color: 'white'
    },
    containerInput:{
        backgroundColor:'white',
        marginLeft: '5%',
        marginRight: '5%',
        color: 'white'
    }
})