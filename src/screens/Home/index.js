import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native"
import amazonLogo from '../../../assets/amazon_logo.png'
import primeVideoLogo from '../../../assets/prime_video.png'
import MovieTheWhell from '../../../assets/movies/the_wheel_of_time.png'
import { MoviesCard } from "../../components/MoviesCard"
import {MOVIESWATCHING} from "../../../utils/moviesWatching.js"
import {MOVIESCRIME} from "../../../utils/moviesCrimes.js"
import {MOVIESWATCH} from "../../../utils/moviesWatch.js"
import { FilmList } from "../../components/FilmList/index.js"


export const Home = () => {
     
    return (
         
        
            <View style={style.container}>   
            <FlatList/>
            <View style={style.header}>
                <Image style={style.primeVideoLogo} source={primeVideoLogo}></Image>
                <Image style={style.amazonLogo} source={amazonLogo}></Image>
            </View>

            <View style={style.category}>
                <TouchableOpacity>
                    <Text style={style.categoryText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={style.categoryText}>TV Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={style.categoryText}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={style.categoryText}>Kids</Text> 
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={style.movieImage} >
                 <Image source={MovieTheWhell}></Image>
            </TouchableOpacity>
    
            <FilmList title="Continue Watchingaa" dataFilm={MOVIESWATCHING} />
            <FilmList title="Crime Movies" dataFilm={MOVIESCRIME} /> 
            <FilmList title="Wath in your leangue" dataFilm={MOVIESWATCH}/> 
            
        
  
        </View>
        // </ScrollView>
        
        
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