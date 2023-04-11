import s from './styles.module.scss';

export function Header(){
    return(
        <header className={s.header}>
        <h3 >You're almost done!</h3>
        <div className={s.divWrapper} >
            <img
            src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
            alt=""
  
            />
            <div className={s.divInfo} >
            <h1>
                Aiāna Restaurant Collective
            </h1>
            <div >
                <p >Tues, 22, 2023</p>
                <p >7:30 PM</p>
                <p >3 people</p>
            </div>
            </div>
        </div>
        </header>
    )
}