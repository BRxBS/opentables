import { Restaurant } from '../details/page';
import s from './styles.module.scss';


export function Description({description}: {description:string}){
    return(
        <div className={s.description}>
        <p>
            {description}
        </p>
        </div>
    )
}