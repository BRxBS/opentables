import Head from 'next/head'
import { Header } from '../components/header'
import { NavBar } from '../components/navBar'
import { RestaurantCard } from '../components/RestaurantCard';
import styles from '../styles/home.module.scss'


export default function Home() {

  return (
    <>
      <Head>
        <title>Open</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
      
      </Head>

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
