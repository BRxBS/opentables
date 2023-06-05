import Link from "next/link";
import { Price } from "../../../components/price";
import s from "./styles.module.scss";
import { Cuisine, PRICE, Review, Location } from "@prisma/client";
import { calculateReviewRatingAverage } from "../../../utils/calculateReviewRatingAverage";
import { Stars } from "../../../components/icons/Stars";

export interface Restaurant {
    id: number;
    name: string;
    main_image: string;
    price: PRICE;
    cuisine: Cuisine;
    location: Location;
    review: Review[];
    slug: string;
}

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
    const renderRatingText = () => {
        const rating = calculateReviewRatingAverage(restaurant.review);

        if (rating > 4) return "Awesome";
        else if (rating <= 4 && rating > 3) return "Good";
        else if (rating <= 3 && rating > 2) return "Average";
        else if (rating <= 2 && rating >= 0) return "Bad";
    };

    return (
        <div className={s.cardContainer}>
            <div className={s.cardContent}>
                <img src={restaurant.main_image} alt="" />
                <div className={s.info}>
                    <h2>{restaurant.name}</h2>
                    <div className={s.divOne}>
                        <span className={s.starsIcon}>
                            {" "}
                            <Stars reviews={restaurant.review} />
                        </span>
                        <p>{renderRatingText()}</p>
                    </div>
                    <div className={s.divTwo}>
                        <Price price={restaurant.price} />
                        <p className={s.cusineName}>
                            {restaurant.cuisine.name}
                        </p>
                        <p>{restaurant.location.name}</p>
                    </div>
                </div>
            </div>
            <div className={s.moreInfo}>
                <Link href={`/restaurant/${restaurant.slug}/details`}>
                    View more information
                </Link>
            </div>
        </div>
    );
}
