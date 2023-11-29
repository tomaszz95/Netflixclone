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

export const moviesGenreLinksKids = [
    {
        type: 'Popular Movies',
        link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&certification=G&certification_country=US',
    },
    {
        type: 'Top Rated Movies',
        link: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&certification=G&certification_country=US',
    },
    {
        type: 'Trending Movies',
        link: 'https://api.themoviedb.org/3/trending/movie/week?language=en-US&certification=G&certification_country=US',
    },
    {
        type: 'Adventure',
        link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=12&certification=G&certification_country=US',
    },
    {
        type: 'Fantasy',
        link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=14&certification=G&certification_country=US',
    },
    {
        type: 'Animation',
        link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=16&certification=G&certification_country=US',
    },
    {
        type: 'Action',
        link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=28&certification=G&certification_country=US',
    },
    {
        type: 'Comedy',
        link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=35&certification=G&certification_country=US',
    },
    {
        type: 'History',
        link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=36&certification=G&certification_country=US',
    },
    {
        type: 'Documentary',
        link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=99&certification=G&certification_country=US',
    },
    {
        type: 'Science Fiction',
        link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=878&certification=G&certification_country=US',
    },
    {
        type: 'Mystery',
        link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=9648&certification=G&certification_country=US',
    },
    {
        type: 'Music',
        link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=10402&certification=G&certification_country=US',
    },
    {
        type: 'Romance',
        link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=10749&certification=G&certification_country=US',
    },
    {
        type: 'Family',
        link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=10751&certification=G&certification_country=US',
    },
]

export const seriesGenreLinksKids = [
    {
        type: 'Popular Series',
        link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&certification=G&certification_country=US',
    },
    {
        type: 'Top Rated Series',
        link: 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&certification=G&certification_country=US',
    },
    {
        type: 'Trending Series',
        link: 'https://api.themoviedb.org/3/trending/tv/week?language=en-US&certification=G&certification_country=US',
    },
    {
        type: 'Animation',
        link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=16&certification=G&certification_country=US',
    },
    {
        type: 'Comedy',
        link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=35&certification=G&certification_country=US',
    },
    {
        type: 'Documentary',
        link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=99&certification=G&certification_country=US',
    },
    {
        type: 'Mystery',
        link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=9648&certification=G&certification_country=US',
    },
    {
        type: 'Family',
        link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=10751&certification=G&certification_country=US',
    },
    {
        type: 'Kids',
        link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=10762&certification=G&certification_country=US',
    },
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

export const allMoviesLinks = [
    {
        type: 'Popular Movies',
        link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc',
    },
    {
        type: 'Top Rated Movies',
        link: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    },
    { type: 'Trending Movies', link: 'https://api.themoviedb.org/3/trending/movie/week?language=en-US' },
    { type: 'Adventure', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=12' },
    { type: 'Fantasy', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=14' },
    { type: 'Animation', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=16' },
    { type: 'Drama', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=18' },
    { type: 'Horror', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=27' },
    { type: 'Action', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=28' },
    { type: 'Comedy', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=35' },
    { type: 'History', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=36' },
    { type: 'Western', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=37' },
    { type: 'Thriller', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=53' },
    { type: 'Crime', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=80' },
    { type: 'Documentary', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=99' },
    {
        type: 'Science Fiction',
        link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=878',
    },
    { type: 'Mystery', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=9648' },
    { type: 'Music', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=10402' },
    { type: 'Romance', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=10749' },
    { type: 'Family', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=10751' },
    { type: 'War', link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=10752' },
]

export const popularAndNewestMovies = [
    {
        type: 'Popular Movies',
        link: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc',
    },
    { type: 'Trending Movies', link: 'https://api.themoviedb.org/3/trending/movie/week?language=en-US' },
    {
        type: 'Top Rated Movies',
        link: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    },
    { type: 'Upcoming Movies', link: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1' },
    { type: 'Now Playing', link: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1' },
]

export const popularAndNewestSeries = [
    {
        type: 'Popular Series',
        link: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc',
    },
    {
        type: 'Top Rated Series',
        link: 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1',
    },
    { type: 'Trending Series', link: 'https://api.themoviedb.org/3/trending/tv/week?language=en-US' },
    { type: 'Upcoming Series', link: 'https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1' },
]

export const genrePopularNewTopMoviesSeries = [
    {
        name: 'popularMovies',
        link1: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
        link2: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc',
    },
    {
        name: 'topRatedMovies',
        link1: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        link2: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2',
    },
    {
        name: 'trendingMovies',
        link1: 'https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=1',
        link2: 'https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=2',
    },
    {
        name: 'popularSeries',
        link1: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc',
        link2: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=2&sort_by=popularity.desc',
    },
    {
        name: 'topRatedSeries',
        link1: 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1',
        link2: 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=2',
    },
    {
        name: 'trendingSeries',
        link1: 'https://api.themoviedb.org/3/trending/tv/week?language=en-US&page=1',
        link2: 'https://api.themoviedb.org/3/trending/tv/week?language=en-US&page=2',
    },
]