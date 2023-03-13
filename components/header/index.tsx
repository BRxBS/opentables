import { SearchBar } from './SearchBar';
import styles from './styles.module.scss';


export function Header(){

    return(
        <>
            <header className={styles.header}>
                <div className={styles.divWrapper}>
                <h1>
                    Find your table for any occasion
                </h1>
                <SearchBar/>
                </div>
            </header>
        </>
    )
}