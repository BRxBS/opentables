import { NavBAr } from '../../components/navBar';
import { Header } from '../../components/header';
import styles from './styles.module.scss';



export function HomePage(){
    return(
        <>
                <main className={styles.mainContainer}>
        <main className={styles.SecondMainContainer}>
            {/* NAVBAR */}
            <NavBAr/>
            {/* NAVBAR */}
            <main>
            {/* HEADER */}
            <Header/>
            {/* HEADER */} 
            {/* CARDS */}
            <div className={styles.cardsWrapper}>

            {/* CARD */}
                <div
                className={styles.cardContentWrapper}
                >
                <img
                    src="https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg"
                    alt=""
          
                />
                <div className={styles.cardContent}>
                    <h3 >Milestones Grill</h3>
                    <div className={styles.reviewsDiv}>
                    <span >*****</span>
                    <p >77 reviews</p>
                    </div>
                    <div className={styles.infoDiv}>
                    <p >Mexican</p>
                    <p >$$$$</p>
                    <p>Toronto</p>
                    </div>
                    <p >Booked 3 times today</p>
                </div>
                </div>
                {/* CARD */}
            </div>
            {/* CARDS */}
            </main>
        </main>
        </main>

        </>
    )
}