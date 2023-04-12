import Head from 'next/head'
import { Header } from '../components/header'
import { NavBar } from '../components/navBar'
import { RestaurantCard } from '../components/RestaurantCard';
import styles from '../styles/home.module.scss'


export default function Home() {

  return (
    <>

      <main className={styles.mainContainer}>
        <main className={styles.SecondMainContainer}>

            <NavBar/>
            <main>
            <Header 
            // value={location}
            // onChange ={(e) => setLocation(e.target.value)}
            // onClick = {() => {
            //   if(location === 'banana') return;
            //   router.push("/search")
            // }}
            />
            
            </main>
            <RestaurantCard/>
        </main>
        </main>
    </>
  )
}
