"use client"
import { useEffect, useState } from 'react';
import s from './styles.module.scss';
import {CaretDown, CaretUp} from 'phosphor-react'
import { Cuisine, Location } from '@prisma/client';



interface data{
    // id: number,
    cusine: Cuisine[],
    location: Location[],
    // price: PRICE
}
export function MobileBar({cusine, location}: data){

const [isOpen, setIsOpen] = useState(false);

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
        <div className={s.containerAside} onClick={handleButtonClick}>
            {isOpen ?
            <div className={s.Caret}>
                <h3>Less Information</h3>
                <CaretUp size={32} color="#000000" />
            </div>
             : 
             <div className={s.Caret}>
                <h3>More Information</h3>
                <CaretDown size={32} color="#000000" />
             </div>
           
            }

        {isOpen && (     
        
            <aside className={s.MobileAsideContent} >

                <div className={s.one}>
                <h1>Region</h1>
                {location.map((location)=>(     
                <p key={location.id}>{location.name}</p>
                ))}
                </div>
                <div className={s.two}>
                <h1>Cuisine</h1>
                {cusine.map((cusine)=>(     
                <p key={cusine.id}>{cusine.name}</p>
                ))}
                </div>
                <div className={s.three}>
                <h1>Price</h1>
                <div>
                    <button className={s.button}>
                    $
                    </button>
                    <button>
                    $$
                    </button>
                    <button>
                    $$$
                    </button>
                </div>
                </div>
            </aside>
        )}
        
        </div>
    )
}