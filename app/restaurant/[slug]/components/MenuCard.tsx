import { Item } from '@prisma/client';
import s from './styles.module.scss';

export function MenuCard({item}: {item:Item}){
    return(
        <div className={s.menuCard}>
        <div>
            <h3>{item.name}</h3>
            <p>
            {item.description}
            </p>
            <p className={s.p}>${item.price}</p>
        </div>
        </div>
    )
}