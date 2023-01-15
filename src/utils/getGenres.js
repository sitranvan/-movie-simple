function getGenres(data1, data2) {
    const genres = []
    data1.genre_ids.forEach((id) => {
        const item = data2.find((x) => x.id === id)

        if (item) {
            genres.push({ id: item.id, name: item.name })
        }
    })
    return genres
}

export default getGenres
