"use client"

import { Cuisine, Location, PRICE } from '@prisma/client';
import s from './styles.module.scss';

interface data{
    // id: number,
    cusine: Cuisine[],
    location: Location[],
    // price: PRICE
}
export function SideBar({cusine, location}: data){


    return(
          
        <>
            <aside className={s.asideContent} >

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

        </>
    )
}