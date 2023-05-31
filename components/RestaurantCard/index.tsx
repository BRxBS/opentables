import Link from 'next/link';
import { RestaurantCardType } from '../../app/page';
import { Stars } from '../icons/Stars';
import { Price } from '../price';
import styles from './styles.module.scss';

interface Props{
restaurant: RestaurantCardType;
}
export function RestaurantCard({restaurant}: Props){
    return(
        <>
        <div className={styles.cardsWrapper}>

<Link href={`/restaurant/${restaurant.slug}/details`} className={styles.link}>
    <div
    className={styles.cardContentWrapper}
    >
    <img
        src={restaurant.main_image}
        alt=""
        className={styles.img}

    />
    <div className={styles.cardContent}>
        <h3> {restaurant.name} </h3>
        <div className={styles.reviewsDiv}>
            <span>
                 <Stars reviews={restaurant.review}/>
            </span>
            <p >{restaurant.review.length} {" "}
            review{restaurant.review.length === 1 ? "" : "s"} 
            </p>

        </div>
        <div className={styles.infoDiv}>
        <p >{restaurant.cuisine.name}</p>
        <Price price={restaurant.price}/>
        <p>{restaurant.location.name}</p>
        </div>
        <p >Booked 3 times today</p>
    </div>
    </div>

    </Link>
</div>
        </>
    )
}