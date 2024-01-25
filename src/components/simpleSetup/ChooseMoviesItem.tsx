import Image from 'next/image'
import THUMB_ICON from '../../assets/icons/thumbIcon.png'
import { fetchedMoviesPropsData } from '../../types/simpleSetupTypes'

import styles from './ChooseMoviesItem.module.css'

type ComponentType = {
    movieLink: fetchedMoviesPropsData
    onAddMovieHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
    selectedMovies: string[]
}

const ChooseMoviesItem: React.FC<ComponentType> = ({ movieLink, onAddMovieHandler, selectedMovies }) => {
    return (
        <li key={movieLink.movieTitle} className={styles.inputsItem}>
            <input type="checkbox" id={movieLink.movieTitle} onChange={onAddMovieHandler} className={styles.input} />
            <label htmlFor={movieLink.movieTitle} className={styles.label}>
                <img
                    src={`https://image.tmdb.org/t/p/original/${movieLink.posterPath}`}
                    alt="Poster of movie"
                    className={styles.posterImg}
                />
                <div
                    className={`${styles.checkedBox} ${
                        selectedMovies.includes(movieLink.movieTitle) ? styles.checked : ''
                    }`}
                >
                    <Image src={THUMB_ICON} alt="" className={styles.thumbIcon} />
                </div>
            </label>
        </li>
    )
}

export default ChooseMoviesItem
