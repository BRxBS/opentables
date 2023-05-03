import Link from 'next/link';
import { RestaurantByCity } from '../page';
import { Price } from '../../../components/price';
import s from './styles.module.scss';

interface Props{
    info: RestaurantByCity;
}

export function RestaurantCard({info}: Props){

    return(
        <>
                <div className={s.cardContent}>
                <img
                    src={info.main_image}
                    alt=""
                />
                <div className={s.info}>
                    <h2>{info.name}</h2>
                    <div className={s.divOne}>
                    <p>*****</p>
                    <p>Awesome</p>
                    </div>
                    <div className={s.divTwo}>
                    
                        <Price price={info.price}/>
                        <p>{info.cuisine.name}</p>
                        <p>{info.location.name}</p>
                    
                    </div>
                    <div>
                    <Link href={`/restaurant/${info.slug}/details`}>View more information</Link>
                    </div>
                </div>
                </div>
        </>
    )
}