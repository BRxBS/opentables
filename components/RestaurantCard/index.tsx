import Link from 'next/link';
import styles from './styles.module.scss';


export function RestaurantCard(){
    return(
        <>
        <div className={styles.cardsWrapper}>

<Link href="/restaurant/mill-grill/details" className={styles.link}>
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

    </Link>
</div>
        </>
    )
}