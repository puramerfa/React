import { MagnifyingGlass } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { CardMovies } from "../../components/CardMovies";
import { api } from "../../services/api";

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
}

export default function Home() {
    
    const [discoveryMovies, setDiscoveryMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadingMoreData();
    }, []);
    const loadingMoreData = async () => {
        try {
            setLoading(true);
            const response = await api.get('movie/popular', {
                params: {
                    page: page
                }
            })
            setDiscoveryMovies([...discoveryMovies, ...response.data.results]);
            setPage(page + 1);
            setLoading(false);
        } catch (error) {
            console.error("Erro ao carregar mais dados:", error);
            setLoading(false);
        }
    }

    const searchMovies = async (query: string) => {
        setLoading(true);
        const response = await api.get('search/movie', {
            params: {
                query: query
            }
        })
    }

    const handleSearch = (text: string) => {
        setSearch(text);
        if (text.length > 2) {

        } else {

        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>O que você deseja assitir?</Text>

            <View style={styles.containerInput} >
                
                <TextInput
                    style={styles.textInput}
                    placeholder="Pesquisar"
                    placeholderTextColor={'#FFF'}
                    value={search}
                    onChangeText={handleSearch}
                     />
                <MagnifyingGlass color="white" weight='light'   style={{marginRight: '3%'}} />
            </View>
            <View style={styles.viewList}>
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={discoveryMovies}
                    numColumns={3}
                    renderItem={(item) => <CardMovies data={item.item} />}

                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        padding: 0,
                        paddingBottom: 100
                    }}
                    
                    onEndReached={() => loadingMoreData()}
                    onEndReachedThreshold={0.5}
                />
                {loading && <ActivityIndicator size={50} color={'#FFF'}/>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewList: {
        height: '100%',
        width: '100%',
        flex: 1
    },
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
    containerInput: {
        marginTop: '6%',
        marginBottom: '5%',
        backgroundColor: '#67686D',
        marginLeft: '5%',
        marginRight: '5%',
        borderBottomColor: 'white',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flex: 0.05,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

    },
    textInput: {
        textAlign: 'justify',
        fontSize: 16,
        color: '#FFF',
        paddingBottom: 5,
        height: '100%',
        width: '100%',
        marginLeft: '3%',
        flex: 1
    }
})