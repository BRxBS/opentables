import { NavBar } from '../../components/navBar';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { MobileBar } from './components/MobileBar';
import { RestaurantCard } from './components/RestaurantCard';
import { Cuisine, Location, PRICE, PrismaClient } from '@prisma/client';
import s from './styles.module.scss';

export interface RestaurantByCity{
        id: number,
        name: string,
        main_image: string,
        price: PRICE,
        cuisine: Cuisine,
        location: Location,
        slug: string
}

const prisma = new PrismaClient();

const fetchRestaurantByCity = async (city:string | undefined): Promise<RestaurantByCity[]> => {
    const select = {
        id: true,
        name: true,
        main_image: true,
        price: true,
        cuisine: true,
        location: true,
        slug: true
    }
    if(!city) return prisma.restaurant.findMany({select});
    
    else return prisma.restaurant.findMany({
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
const fetchLocation =async () => {
    return prisma.location.findMany()
}

const fetchCusine =async () => {
    return prisma.cuisine.findMany()
}

export default async function Search({searchParams}:{searchParams: { city: string}}){
    const restaurants = await fetchRestaurantByCity(searchParams.city)
    const location = await fetchLocation();
    const cusine = await fetchCusine();
    
    return(
        <>
        <main className={s.mainContainer}>
        <main className={s.SecondMainContainer}>
            <NavBar/>
            <Header/>
            <div className={s.divContainer}>
            <div className={s.divMobileBar}>
            <MobileBar location={location}
                     cusine={cusine}/>
            </div>

            <div className={s.divSideBar}>

            <SideBar location={location}
                     cusine={cusine}/>

            </div>

            <div className={s.cardContainer}>

                {restaurants.length ? (               
                
                restaurants.map((restaurants)=> (
                    <RestaurantCard info={restaurants}
                                    key={restaurants.id}/>)
                

                )) : (<h1>Sorry, no restaurants in this area</h1>)}
                
            </div>
            </div>
            
        </main>
        </main>

        </>
    )
}