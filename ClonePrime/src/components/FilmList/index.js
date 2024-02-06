import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { MoviesCard } from "../MoviesCard";

export function FilmList(props){
    
    return (
        <View style={style.view}>
            <Text style={style.filmCategory}>{props.title}</Text>
            <FlatList
                horizontal
                data={props.dataFilm}
                keyExtractor={(item) => item.id} 
                renderItem={({item}) => {
                    return (   
                        <TouchableOpacity> 
                        <Image style={style.img} source={item.moviesURL} />
                        </TouchableOpacity>
                    )
                }}
            />  
        </View>
    )
}

// export function MoviesCard(props){
//     return (
//         <TouchableOpacity> 
//             <Image style={styles.img} source={props.moviesURL} />
//         </TouchableOpacity>
//     )
// }

// const styles = StyleSheet.create({
//     img: {
//         margin: 10,
//     }
// })



const style = {
    view: {
        flex: 1
    },
    img: {
        margin: 10,
    },
    scrollView: {
        marginTop: 20,
        backgroundColor: '#232F3E'
    },
    container: {
        flex: 1,
        backgroundColor: '#232F3E',
        alignItems: 'flex-start',
    },

    header: {
        width: '100%',
        paddingTop: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    amazonLogo: {
        marginTop: -20,
        marginLeft: 20
    },
    primeVideoLogo: {
        marginLeft: 25,
        marginTop: -50
    },

    category: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        marginTop: 5,
        marginBottom: 20
    },
    filmCategory: {
        color: 'white',
        fontSize: 14,
        fontWeight: '700',
        marginTop: 'auto',
        marginLeft: 10
        
    },
    categoryText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '700'
    },

    movieImage: {
        width: '100%',
        alignItems: 'center',
    }

}