"use client"
import {CaretDown, CaretUp} from 'phosphor-react'
import { useEffect, useState } from 'react';
import s from './styles.module.scss';

export function MobileReservationCard(){
    const [isOpen, setIsOpen] = useState(true);

useEffect(()=> {

    const handler = () => setIsOpen(false)
    window.addEventListener('click', handler)
    return () => {
        window.addEventListener('click', handler)
    }
},[])

const handleButtonClick = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
}

    return(
        <div className={s.MobileReservationContainer} onClick={handleButtonClick}>
                      
        {isOpen ?
            <div className={s.Caret}>
                <div className={s.divOne}>
                <h4>Make a Reservation</h4>
                <CaretDown size={32} color="#000000" />
            </div>
            </div>
             : 
             <div className={s.Caret}>
             <div className={s.divOne}>
             <h4>Make a Reservation</h4>
             <CaretUp size={32} color="#000000" />
         </div>
         </div>
           
            }

        {isOpen && (
    <div className={s.reservationContent}>
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
        </div>)}

    </div>
    )
}