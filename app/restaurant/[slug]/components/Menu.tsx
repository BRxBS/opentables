import { MenuCard } from './MenuCard';
import s from './styles.module.scss';

export function Menu(){
    return(
        <main className={s.menu}>
        <div>
            <div className={s.one}>
            <h1 >Menu</h1>
            </div>
        <MenuCard/>
        </div>
        </main>
    )
}