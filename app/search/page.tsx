import { NavBar } from '../../components/navBar';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { MobileBar } from './components/MobileBar';
import s from './styles.module.scss';
import Link from 'next/link';
import { RestaurantCard } from './components/RestaurantCard';

export default function Search(){
    return(
        <>
        <main className={s.mainContainer}>
        <main className={s.SecondMainContainer}>
            {/* NAVBAR */}
            <NavBar/>
            {/* HEADER */}
            <Header/>
            <div className={s.divContainer}>
            {/* SEARCH SIDE BAR */}
            <div className={s.divMobileBar}>
            <MobileBar/>
            </div>

            <div className={s.divSideBar}>
            <SideBar/>
            </div>
            {/* SEARCH SIDE BAR */}
            <div className={s.cardContainer}>
                {/* RESAURANT CAR */}
                <RestaurantCard/>
                {/* RESAURANT CAR */}
            </div>
            </div>
        </main>
        </main>

        </>
    )
}