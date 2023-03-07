import styles from './styles.module.scss';


export function NavBAr(){
    return(
        <>
        <nav className={styles.nav}>
            <a href=""> OpenTable </a>
            <div>
                <div >
                <button >
                    Sign in
                </button>
                <button className={styles.SingUpButton}>Sign up</button>
                </div>
            </div>
            </nav>
        </>
    )
}