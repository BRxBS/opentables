import { NavBar } from '../../../components/navBar';
import { Header } from './Components/Header';
import s from '../styles.module.scss';
import { Form } from './Components/Form';

export default function Booking(){
    
    return(
        <>
    <main className={s.mainContainer}>
        <main className={s.mainContent}>

            <NavBar/>
        <div className={s.divContainer}>
            <div className={s.divContent} >  
                <Header/>
                <Form/>
            </div>
         </div>
        </main>
    </main>

        </>
    )
}