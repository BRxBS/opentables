import Link from 'next/link';
import styles from './styles.module.scss';


export function NavBar(){
    return(
        <>
        <nav className={styles.nav}>
            <Link href="/"> OpenTable </Link>
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