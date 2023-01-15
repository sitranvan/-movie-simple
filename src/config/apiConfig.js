import axios from 'axios'
const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'e9e9d8da18ae29fc430845952232787c',
    orginalImage: (path) => `https://image.tmdb.org/t/p/original/${path}`,
    w500Image: (path) => `https://image.tmdb.org/t/p/w500/${path}`,
}
// axios.defaults.headers.common['api_key'] = apiConfig.apiKey

export default apiConfig
