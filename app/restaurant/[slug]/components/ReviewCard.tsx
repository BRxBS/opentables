"use client"

import { Review } from '@prisma/client';
import { Stars } from '../../../../components/icons/Stars';
import s from './styles.module.scss';

export function ReviewCard( {review} : {review: Review}){
    return(
        <>
          
            <div>
            <div className={s.wrapper}>
                <div className={s.out}>
                <div>
                    <h2>{review.first_name[0]} {review.last_name[0]} </h2>
                </div>
                <p >{review.first_name} {review.last_name}</p>
                </div>
                < div className={s.outTwo}>
                <div >
                <Stars rating={review.rating} reviews={[]}/>
                </div>
                <div className={s.pText}>
                    <p >
                    {review.text}
                    </p>
                </div>
                </div>
    
             </div>
             </div>
        </>
    )
}