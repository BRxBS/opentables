import s from './styles.module.scss';

export function MenuCard(){
    return(
        <div className={s.menuCard}>
        <div>
            <h3>Surf and Turf</h3>
            <p>
            A well done steak with lobster and rice
            </p>
            <p className={s.p}>$80.00</p>
        </div>
        </div>
    )
}