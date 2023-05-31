"use client"

import { Review } from '@prisma/client';
import { ReviewCard } from './ReviewCard';
import s from './styles.module.scss';

export function Reviews( {reviews} : {reviews: Review[]}){
    return(
        <div className={s.reviews} >
        <h1>
            What {reviews.length} {reviews.length === 1 ? "person is saying." : "people are saying"}  
        </h1>
        <div className={s.reviewCard}>

             {reviews.map(review => (
                <ReviewCard review={review} key={review.id}/>
             ))}
        </div>
        </div>
    )
}