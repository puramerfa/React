import { Image, StyleSheet, TouchableOpacity } from "react-native"


export const MoviesCard = (props) => {
    return (
        <TouchableOpacity> 
            <Image style={styles.img} source={props.moviesURL} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img: {
        margin: 10,
    }
})