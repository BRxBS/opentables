import s from './styles.module.scss';

export function Rating(){
    return(
        <div className={s.divRating}>
        <div className={s.firstDiv}>
            <p>*****</p>
            <p className="text-reg ml-3">4.9</p>
        </div>
        <div className={s.secondDiv}>
            <p className="text-reg ml-4">600 Reviews</p>
        </div>
        </div>
    )
}