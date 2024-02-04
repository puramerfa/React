import { FlatList, Text, View } from "react-native";
import { MoviesCard } from "../MoviesCard";

export function FilmList(props){
    return (
        <View>
            <Text style={style.filmCategory}>{props.title}</Text>
            <FlatList
                horizontal
                data={props.dataFilm}
                keyExtractor={(item) => item.id} 
                renderItem={({item}) => {
                    return (   
                        <MoviesCard moviesURL={item.moviesURL} />
                    )
                }}
            />  
        </View>
    )
}



const style = {
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