import { PRICE } from '@prisma/client';
import styles from './styles.module.scss';


export function Price({price}: {price:PRICE}){
const renderPrice = () =>{
    if (price === PRICE.CHEAP){
        return(
            <>
            <span>$</span>
            <span className={styles.priceText}>$$</span>
            </>
        )
    } else if(price === PRICE.REGULAR){
        return(
            <>
            <span>$$</span>
            <span className={styles.priceText}>$</span>
            </>
        )
    } else {
        return(
            <>
            <span>$$$</span>
            </>
        )
    }
}

    return(
        <>
        <p className={styles.Text}>{renderPrice()}</p>
        </>
    )
}