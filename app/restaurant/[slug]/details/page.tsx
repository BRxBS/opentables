import Link from 'next/link';
import { NavBar } from '../../../../components/navBar';
import s from './styles.module.scss';
import { ReservationCard } from '../components/ReservationCad';
import { Reviews } from '../components/Reviews';
import { Header} from '../components/Header'
import { Title } from '../components/Title';
import { RestaurantNavBar } from '../components/RestaurantNavBar';
import { MobileReservationCard } from '../components/MobileReservationCard';
import { Rating } from '../components/Rating';
import { Description } from '../components/Description';
import { Images } from '../components/Images';

export default function RestaurantDetails(){
    return(
        <>
    <main className={s.mainContainer}>
        <main className={s.mainContent}>
        
            <NavBar/>
            
            <Header/>
            <div className={s.discriptionContainer}>
            <div className={s.discriptionContent}>
            <RestaurantNavBar/> 
            <Title/> 
            <Rating/>
            <Description/>
            <Images/>
            <Reviews/>
                 
            </div>
            <div className={s.divMobileReservationCard}>
            <MobileReservationCard/>
            </div>

            <div className={s.divReservationCard}>
            <ReservationCard/>
           
            </div>
            </div>
        </main>
        </main>

        </>
    )
}