import { Review } from '@prisma/client';
import { Stars } from '../../../../components/icons/Stars';
import { calculateReviewRatingAverage } from '../../../../utils/calculateReviewRatingAverage';
import s from './styles.module.scss';

export function Rating({reviews} : {reviews: Review[]}){
    return(
        <div className={s.divRating}>
        <div className={s.firstDiv}>
            <p><Stars reviews={reviews}/></p>
            <p className="text-reg ml-3">{
                calculateReviewRatingAverage(reviews).toFixed(1)
            }</p>
        </div>
        <div className={s.secondDiv}>
            <p className="text-reg ml-4">{reviews.length} {" "} {reviews.length === 1 ? ' Review' : 'Reviews'} </p>
        </div>
        </div>
    )
}