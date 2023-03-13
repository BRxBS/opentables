"use client"

import s from './styles.module.scss';

export function Reviews(){
    return(
        <div className={s.reviews} >
        <h1>
            What 100 people are saying
        </h1>
        <div className={s.reviewCard}>
            {/* REVIEW CARD */}
            <div>
            <div className={s.wrapper}>
                <div className={s.out}>
                <div>
                    <h2>MJ</h2>
                </div>
                <p >Micheal Jordan</p>
                </div>
                <div className={s.outTwo}>
                <div >
                    <div>*****</div>
                </div>
                <div className={s.pText}>
                    <p >
                    Laurie was on top of everything! Slow night due to the
                    snow storm so it worked in our favor to have more one on
                    one with the staff. Delicious and well worth the money.
                    </p>
                </div>
                </div>
            </div>
            </div>
            {/* REVIEW CARD */}
        </div>
        </div>
    )
}