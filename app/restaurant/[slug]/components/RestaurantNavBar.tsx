import Link from 'next/link';
import { Restaurant } from '../details/page';
import s from './styles.module.scss';


export function RestaurantNavBar({slug}: {slug: string}){
    return(
        <nav className={s.nav}>
        <Link href={`/restaurant/${slug}/details`}> Overview </Link>
        <Link href={`/restaurant/${slug}/menu`}> Menu </Link>
        </nav>
    )
}