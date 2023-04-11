import s from './styles.module.scss';

export function Header(){
    return(
        <header className={s.header}  >
        <div className={s.divWrapper}>
            <h1>
            Milestones Grill (Toronto)
            </h1>
        </div>
        </header>
    )
}