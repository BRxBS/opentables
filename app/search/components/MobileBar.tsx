"use client"
import { useEffect, useState } from 'react';
import s from './styles.module.scss';
import {CaretDown, CaretUp} from 'phosphor-react'
import { Cuisine, Location, PRICE } from '@prisma/client';
import Link from 'next/link';



interface data{
    // id: number,
    cuisine: Cuisine[],
    location: Location[],
    searchParams: { city?: string, cusine?: string, price?: PRICE}
}
export function MobileBar({cuisine, location, searchParams}: data){

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
                <Link href={{
                    pathname:"/search",
                    query:{
                        city:location.name
                    }
                }} key={location.id}>{location.name}</Link>
                ))}
                </div>
                <div className={s.two}>
                <h1>Cuisine</h1>
                {cuisine.map((cuisine)=>(     
                <Link href={{
                    pathname:"/search",
                    query:{
                        cuisine:cuisine.name
                    }
                }} key={cuisine.id}>{cuisine.name}</Link>
                ))}
                </div>
                <div className={s.three}>
                <h1>Price</h1>
                <div>
                    <Link href={{
                    pathname: "/search",
                    query:{
                        ...searchParams,
                        price: PRICE.CHEAP
                    }
                }} className={s.button}>
                    $
                    </Link>
                    <Link  href={{
                    pathname: "/search",
                    query:{
                        ...searchParams,
                        price: PRICE.REGULAR
                    }
                }}>
                    $$
                    </Link>
                    <Link href={{
                    pathname: "/search",
                    query:{
                        ...searchParams,
                        price: PRICE.EXPENSIVE
                    }
                }}>
                    $$$
                    </Link>
                </div>
                </div>
            </aside>
        )}
        
        </div>
    )
}