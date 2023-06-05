import { Header } from "../components/header";
import styles from './styles/home.module.scss'



export default function Loading(){
return(
    <>
    <Header/>
    <div className={styles.loadingMainContainer}>
        {[1,2,3,4,5,6,7,8,9,10].map(num =>(
            <div key={num} className={styles.loadingCards}></div>
        ))}
    </div>
    
    
    </>
)
}