import apiConfig from '../config/apiConfig'
import request from '../utils/requets'

const movieApi = {
    getMovie: (type, params) => {
        return request.get(`movie/${type}`, { params: { ...params, api_key: apiConfig.apiKey } })
    },
    getDetail: (id, params) => {
        const url = `movie/${id}`
        return request.get(url, { params: { ...params, api_key: apiConfig.apiKey } })
    },
    getCastMovie: (id, params) => {
        const url = `movie/${id}/credits`
        return request.get(url, { params: { ...params, api_key: apiConfig.apiKey } })
    },
    getVideoMovie: (id, params) => {
        const url = `movie/${id}/videos`
        return request.get(url, { params: { ...params, api_key: apiConfig.apiKey } })
    },
    getGenresMovie: (params) => {
        const url = 'genre/movie/list'
        return request.get(url, { params: { ...params, api_key: apiConfig.apiKey } })
    },
    searchMovie: (params) => {
        const url = '/search/movie'
        return request.get(url, { params: { ...params, api_key: apiConfig.apiKey } })
    },
    getKeywordMovie: (params) => {
        const url = '/search/keyword'
        return request.get(url, { params: { ...params, api_key: apiConfig.apiKey } })
    },
}

export default movieApi
