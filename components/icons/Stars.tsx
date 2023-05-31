import Image from "next/image"
import { Review } from "@prisma/client"
import fullStar from "../../public/icons/full-star.png"
import halfStar from "../../public/icons/half-Star.png"
import emptyStar from "../../public/icons/empty-Star.png"
import { calculateReviewRatingAverage } from "../../utils/calculateReviewRatingAverage"
import styles from './styles.module.scss';

export function Stars({reviews, rating} : {reviews: Review[], rating?: number}){
const reviewRating = rating || calculateReviewRatingAverage(reviews);

    const renderStars = () => {
        const stars = [];

        for(let i = 0; i < 5; i++){
            const difference = parseFloat((reviewRating - i).toFixed(1))
                if(difference >= 1) stars.push(fullStar)
                else if (difference < 1 && difference > 0){
                    if(difference <= 0.2) stars.push(emptyStar)
                    else if(difference > 0.2 && difference <=0.6) stars.push(halfStar)
                    else stars.push(fullStar)
                }
                else stars.push(emptyStar)
            
        }
        return stars.map(star => {
            return(
                <>
                 <Image src={star} alt="" className={styles.img}/>
        
              
                </>
            ) 
        })
    }


    return(
        <>
         {renderStars()}      
        </>
    )
}