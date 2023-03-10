import { NavBAr } from '../../../../components/navBar';
import { Header } from '../../../../components/header';
import s from './styles.module.scss';

export default function RestaurantMenu(){
    return(
        <>
    <main className={s.mainContainer}>
        <main className={s.SecondMainContainer}>
            {/* NAVBAR */}
            <NavBAr/>
            {/* NAVBAR */} {/* HEADER */}
            <header >
            <div>
                <h1 >
                Milestones Grill (Toronto)
                </h1>
            </div>
            </header>
            {/* HEADER */} 
            
            {/* DESCRIPTION PORTION */}
            <div className={s.description}>
            <div className={s.div}>
                {/* RESAURANT NAVBAR */}
                <nav>
                <a href=""> Overview </a>
                <a href=""> Menu </a>
                </nav>
                {/* RESAURANT NAVBAR */} {/* MENU */}
                <main>
                <div>
                    <div className={s.one}>
                    <h1 >Menu</h1>
                    </div>
                    <div className={s.menuCard}>
                    {/* MENU CARD */}
                    <div>
                        <h3>Surf and Turf</h3>
                        <p>
                        A well done steak with lobster and rice
                        </p>
                        <p className={s.p}>$80.00</p>
                    </div>
                    {/* MENU CARD */}
                    </div>
                </div>
                </main>
                {/* MENU */}
            </div>
            </div>
            {/* DESCRIPTION PORTION */}
        </main>
        </main>

        </>
    )
}