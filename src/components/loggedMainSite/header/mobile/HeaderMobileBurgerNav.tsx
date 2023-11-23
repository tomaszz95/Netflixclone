import Link from 'next/link'

import styles from './HeaderMobileBurgerNav.module.css'
import { navigationBrowseLinks, navigationKidsLinks } from '../../../helpers/siteText'

type ComponentType = {
    chosenUser: string
}

const HeaderMobileBurgerNav: React.FC<ComponentType> = ({ chosenUser }) => {
    return (
        <>
            {chosenUser !== 'kids'
                ? navigationBrowseLinks.map((genre) => (
                      <li className={styles.genreLink} key={genre.text}>
                          <Link href={genre.link} className={styles.profileLink}>
                              {genre.text}
                          </Link>
                      </li>
                  ))
                : navigationKidsLinks.map((genre) => (
                      <li className={styles.genreLink} key={genre.text}>
                          <Link href={genre.link} className={styles.profileLink}>
                              {genre.text}
                          </Link>
                      </li>
                  ))}
        </>
    )
}

export default HeaderMobileBurgerNav
