import { Restaurant } from '../details/page';
import s from './styles.module.scss';

interface Props{
    restaurant: Restaurant;
    id: number
}

export function Header({name}: {name:string}){
    return(
        <header className={s.header}  >
        <div className={s.divWrapper}>
            <h1>
            {name}
            </h1>
        </div>
        </header>
    )
}