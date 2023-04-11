import Link from 'next/link';
import s from './styles.module.scss';

export function RestaurantNavBar(){
    return(
        <nav className={s.nav}>
        <Link href="/restaurant/mill-grill/details"  > Overview </Link>
        <Link href="/restaurant/mill-grill/menu"  > Menu </Link>
        </nav>
    )
}