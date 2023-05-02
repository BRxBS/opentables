import { NavBar } from '../../components/navBar';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { MobileBar } from './components/MobileBar';
import { RestaurantCard } from './components/RestaurantCard';
import { PrismaClient } from '@prisma/client';
import s from './styles.module.scss';

const prisma = new PrismaClient();

const fetchRestaurantByCity = (city:string) => {
    const select = {
        id: true,
        name: true,
        main_image: true,
        price: true,
        cuisine: true,
        slug: true
    }
    if(!city) return prisma.restaurant.findMany({select});
    
    return prisma.restaurant.findMany({
        where: {
            location:{
                name:{
                    equals:city.toLocaleLowerCase()
                }
            }
        },
        select,
    })
    
}

export default async function Search({searchParams}:{searchParams: { city: string}}){
    const restaurants = await fetchRestaurantByCity(searchParams.city)
    
    return(
        <>
        <main className={s.mainContainer}>
        <main className={s.SecondMainContainer}>
            <NavBar/>
            <Header/>
            <div className={s.divContainer}>
            <div className={s.divMobileBar}>
            <MobileBar/>
            </div>

            <div className={s.divSideBar}>
            <SideBar/>
            </div>

            <div className={s.cardContainer}>
                {restaurants.length ? (<RestaurantCard/>) : (<h1>Sorry, no restaurants in this area</h1>)}
                
            </div>
            </div>
            
        </main>
        </main>

        </>
    )
}