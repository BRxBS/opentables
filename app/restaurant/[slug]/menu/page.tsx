import { NavBar } from '../../../../components/navBar';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { RestaurantNavBar } from '../components/RestaurantNavBar';
import s from './styles.module.scss';

export default function RestaurantMenu(){
    return(
        <>
    <main className={s.mainContainer}>
        <main className={s.SecondMainContainer}>
   
            <NavBar/>
    
            <Header/>
          
            <div className={s.description}>
            <div className={s.div}>

            <RestaurantNavBar/> 
            <Menu/>
            </div>
            </div>
        </main>
        </main>

        </>
    )
}