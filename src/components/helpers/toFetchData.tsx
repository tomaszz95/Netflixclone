export const getOptions = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDBAPI_BEARER}`,
    },
}

export const moviesGenreLinks = [
    {
        type: 'Popular Movies',
        link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
    },
    {
        type: 'Top Rated Movies',
        link: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    },
    { type: 'Trending Movies', link: 'https://api.themoviedb.org/3/trending/movie/week?language=en-US' },
    { type: 'Fantasy', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=14' },
    { type: 'Horror', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=27' },
    { type: 'Action', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=28' },
    { type: 'History', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=36' },
    { type: 'Documentary', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=99' },
    { type: 'Romance', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=10749' },
    { type: 'Family', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=10751' },
]

export const seriesGenreLinks = [
    {
        type: 'Popular Series',
        link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc',
    },
    {
        type: 'Top Rated Series',
        link: 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1',
    },
    { type: 'Trending Series', link: 'https://api.themoviedb.org/3/trending/tv/week?language=en-US' },
    { type: 'Animation', link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=16' },
    { type: 'Drama', link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=18' },
    { type: 'Comedy', link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=35' },
    { type: 'Crime', link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=80' },
    { type: 'Mystery', link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=9648' },
    {
        type: 'Action & Adventure',
        link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=10759',
    },
    {
        type: 'Sci-Fi & Fantasy',
        link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=10765',
    },
    { type: 'War & Politics', link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=10768' },
]
export const allSeriesLinks = [
    {
        type: 'Popular Series',
        link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc',
    },
    {
        type: 'Top Rated Series',
        link: 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1',
    },
    { type: 'Trending Series', link: 'https://api.themoviedb.org/3/trending/tv/week?language=en-US' },
    { type: 'Animation', link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=16' },
    { type: 'Drama', link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=18' },
    { type: 'Comedy', link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=35' },
    { type: 'Crime', link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=80' },
    { type: 'Mystery', link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=9648' },
    {
        type: 'Family',
        link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=10751',
    },
    {
        type: 'Action & Adventure',
        link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=10759',
    },
    {
        type: 'Kids',
        link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=10762',
    },
    {
        type: 'News',
        link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=10763',
    },
    {
        type: 'Reality',
        link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=10764',
    },
    {
        type: 'Sci-Fi & Fantasy',
        link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=10765',
    },
    {
        type: 'Soap',
        link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=10766',
    },
    {
        type: 'Talk',
        link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=10767',
    },
    { type: 'War & Politics', link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=10768' },
]
