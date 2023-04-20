import { Restaurant } from '../details/page';
import s from './styles.module.scss';

interface Props{
    restaurant: Restaurant;
    id: number
}

export function Title({name}: {name:string}){
    return(
        <div className={s.divTitle}>
        <h1>{name}</h1>
        </div>
    )
}