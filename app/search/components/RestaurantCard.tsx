import Link from 'next/link';
import s from './styles.module.scss';

export function RestaurantCard(){

    return(
        <>
                <div className={s.cardContent}>
                <img
                    src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
                    alt=""
                />
                <div className={s.info}>
                    <h2>Aiāna Restaurant Collective</h2>
                    <div className={s.divOne}>
                    <p>*****</p>
                    <p>Awesome</p>
                    </div>
                    <div className={s.divTwo}>
                    
                        <p>$$$</p>
                        <p>Mexican</p>
                        <p>Ottawa</p>
                    
                    </div>
                    <div>
                    <Link href="/restaurant/mile-stone/details">View more information</Link>
                    </div>
                </div>
                </div>
        </>
    )
}