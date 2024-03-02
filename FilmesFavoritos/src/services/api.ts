import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: 'cd8e5e4d6d20e9e1f5e3457b610b58fa',
        language: 'pt-BR'
    }
})