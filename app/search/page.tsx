import { NavBar } from '../../components/navBar';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { MobileBar } from './components/MobileBar';
import { RestaurantCard } from './components/RestaurantCard';
import { PRICE, PrismaClient, Review } from '@prisma/client';
import s from './styles.module.scss';

interface searchParams {
     city?: string, 
     cuisine?: string, 
     price?: PRICE,
     review?: Review[]
}

const prisma = new PrismaClient();

const fetchRestaurantByCity = (searchParams: searchParams)  => {
  const where: any ={};

  if(searchParams.city){
    const location={
              name:{
                equals:searchParams.city.toLowerCase()
            }
    }
    where.location = location;
  }
  if(searchParams.cuisine){
    const cuisine={
              name:{
                equals:searchParams.cuisine.toLowerCase()
            }
    }
    where.cuisine = cuisine;
  }
  if(searchParams.price){
    const price={
             equals:searchParams.price
    }
    where.price = price;
  }

    const select = {
        id: true,
        name: true,
        main_image: true,
        price: true,
        cuisine: true,
        location: true,
        slug: true,
        review:true,
    }

    
  return prisma.restaurant.findMany({
        where,
        select,
    })
    
}
const fetchLocation =async () => {
    return prisma.location.findMany()
}

const fetchCuisine =async () => {
    return prisma.cuisine.findMany()
}

export default async function Search(
    {searchParams}:
    {searchParams: { city?: string, cuisine?: string, price?: PRICE}}){
    const restaurants = await fetchRestaurantByCity(searchParams)
    const location = await fetchLocation();
    const cuisine = await fetchCuisine();
    
    return(
        <>
        <main className={s.mainContainer}>
        <main className={s.SecondMainContainer}>
            <NavBar/>
            <Header/>
            <div className={s.divContainer}>

            <div className={s.divMobileBar}>
            <MobileBar 
                     location={location}
                     cuisine={cuisine}
                     searchParams={searchParams}/>
            </div>

            <div className={s.divSideBar}>
            <SideBar location={location}
                     cuisine={cuisine}
                     searchParams={searchParams}/>
            </div>

            <div className={s.cardContainer}>

                {restaurants.length ? (               
                
                restaurants.map((restaurants)=> (
                    <RestaurantCard restaurant={restaurants}
                                    key={restaurants.id}/>)
                

                )) : (<h1>Sorry, no restaurants in this area</h1>)}
                
            </div>
            </div>
            
        </main>
        </main>

        </>
    )
}