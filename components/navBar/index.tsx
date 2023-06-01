import Link from 'next/link';
import styles from './styles.module.scss';
import AuthModal from '../../app/AuthModal';


export function NavBar(){
    return(
        <>
        <nav className={styles.nav}>
            <Link href="/"> OpenTable </Link>
            <div>
                <div >
                <AuthModal isSignin={true} />
                <AuthModal isSignin={false}/>
                </div>
            </div>
        </nav>
        </>
    )
}