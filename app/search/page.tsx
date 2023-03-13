import { NavBar } from '../../components/navBar';
import { Header } from '../../components/header';
import { SideBar } from './components/SideBar';
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
            <SideBar/>
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