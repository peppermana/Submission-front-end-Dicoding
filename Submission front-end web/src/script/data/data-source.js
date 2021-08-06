class DataSource {
    static searchMovies(keyword) {
        return fetch(`https://www.themoviedb.com/api/v1/json/1/search.php?t=${keyword}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.movies) {
                    return Promise.resolve(responseJson.movies);
                } else {
                    return Promise.reject(`${keyword} is not found`)
                }
            })
    }
}

export default DataSource;
 