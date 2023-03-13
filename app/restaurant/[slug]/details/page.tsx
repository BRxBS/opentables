import Link from 'next/link';
import { NavBar } from '../../../../components/navBar';
import { Header } from '../../../../components/header';
import s from './styles.module.scss';
import { ReservationCard } from '../components/ReservationCad';
import { Reviews } from '../components/Reviews';

export default function RestaurantDetails(){
    return(
        <>
    <main className={s.mainContainer}>
        <main className={s.mainContent}>
            {/* NAVBAR */}
            <NavBar/>
            {/* NAVBAR */} {/* HEADER */}
            <header >
            <div
                className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center"
            >
                <h1 className="text-7xl text-white captitalize text-shadow text-center">
                Milestones Grill (Toronto)
                </h1>
            </div>
            </header>
            {/* HEADER */} 
            {/* DESCRIPTION PORTION */}
            <div className={s.discriptionContainer}>
            <div className={s.discriptionContent}>
                {/* RESAURANT NAVBAR */}
                <nav>
                <Link href="/restaurant/mill-grill/details"  > Overview </Link>
                <Link href="/restaurant/mill-grill/menu"  > Menu </Link>
                </nav>
                {/* RESAURANT NAVBAR */}
                 {/* TITLE */}
                <div className={s.divTitle}>
                <h1 >Milesstone Grill</h1>
                </div>
                {/* TITLE */} 
                {/* RATING */}
                <div className={s.divRating}>
                <div className={s.firstDiv}>
                    <p>*****</p>
                    <p className="text-reg ml-3">4.9</p>
                </div>
                <div className={s.secondDiv}>
                    <p className="text-reg ml-4">600 Reviews</p>
                </div>
                </div>
                {/* RATING */} 
                {/* DESCRIPTION */}
                <div className={s.description}>
                <p>
                    The classics you love prepared with a perfect twist, all served up
                    in an atmosphere that feels just right. That’s the Milestones
                    promise. So, whether you’re celebrating a milestone, making the most
                    of Happy Hour or enjoying brunch with friends, you can be sure that
                    every Milestones experience is a simple and perfectly memorable one.
                </p>
                </div>
                {/* DESCRIPTION */}
                 {/* IMAGES */}
                <div className={s.imgWrapper} >
                <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                    5 photos
                </h1>
                <div className="flex flex-wrap">
                    <img
                    className="w-56 h-44 mr-1 mb-1"
                    src="https://resizer.otstatic.com/v2/photos/xlarge/3/41701449.jpg"
                    alt=""
                    />
                    <img
                    className="w-56 h-44 mr-1 mb-1"
                    src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701450.jpg"
                    alt=""
                    />
                    <img
                    className="w-56 h-44 mr-1 mb-1"
                    src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701452.jpg"
                    alt=""
                    />
                    <img
                    className="w-56 h-44 mr-1 mb-1"
                    src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701453.jpg"
                    alt=""
                    />
                    <img
                    className="w-56 h-44 mr-1 mb-1"
                    src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701454.jpg"
                    alt=""
                    />
                </div>
                </div>
                {/* IMAGES */}
                 {/* REVIEWS */}
                 <Reviews/>
                 
                {/* REVIEWS */}
            </div>
            <ReservationCard/>
            </div>
            {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */} {/* RESERVATION
            CARD PORTION */}
        </main>
        </main>

        </>
    )
}