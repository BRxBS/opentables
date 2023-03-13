"use client"

import s from './styles.module.scss';

export function ReservationCard(){
    return(
        <div className={s.reservationContainer}>
        <div className={s.reservationContent}>
        <div className={s.divOne}>
            <h4>Make a Reservation</h4>
        </div>
        <div className={s.divTwo}>
            <label htmlFor="">Party size</label>
            <select name=""  id="">
            <option value="">1 person</option>
            <option value="">2 people</option>
            </select>
        </div>
        <div className={s.divThree}>
            <div >
            <label htmlFor="">Date</label>
            <input type="text"  />
            </div>
            <div>
            <label htmlFor="">Time</label>
            <select name="" id="" >
                <option value="">7:30 AM</option>
                <option value="">9:30 AM</option>
            </select>
            </div>
        </div>
        <div className={s.divFour}>
            <button>
            Find a Time
            </button>
        </div>
        </div>
    </div>
    )
}