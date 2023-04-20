import Link from 'next/link';
import { NavBar } from '../../../../components/navBar';
import s from './styles.module.scss';
import { ReservationCard } from '../components/ReservationCad';
import { Reviews } from '../components/Reviews';
import { Header} from '../components/Header'
import { Title } from '../components/Title';
import { RestaurantNavBar } from '../components/RestaurantNavBar';
import { MobileReservationCard } from '../components/MobileReservationCard';
import { Rating } from '../components/Rating';
import { Description } from '../components/Description';
import { Images } from '../components/Images';
import { PrismaClient,} from '@prisma/client';


export interface Restaurant{
    id: number,
    name: string,
    images: string[],
    slug: string,
    description: string
  }
  
  const prisma = new PrismaClient();
  
  const fetchRestaurantBySlug = async (slug: string):Promise<Restaurant> =>{
    const restaurant = await prisma.restaurant.findUnique({
     where:{
        slug
     },
     select:{
        id: true,
        slug: true,
        name: true,
        images: true,
        description:true
     }
    })
  if(!restaurant){
    throw new Error()
  }
    return restaurant;
  }
  

export default async function RestaurantDetails({params}: {params: {slug: string}}){
    const restaurant = await fetchRestaurantBySlug(params.slug)
    return(
        <>
    <main className={s.mainContainer}>
        <main className={s.mainContent}>
        
            <NavBar/>
            
            <Header name={restaurant.name}/>
            <div className={s.discriptionContainer}>
            <div className={s.discriptionContent}>
            <RestaurantNavBar slug={restaurant.slug}/> 
            <Title name={restaurant.name}/> 
            <Rating/>
            <Description description={restaurant.description}/>
            <Images images={restaurant.images}/>
            <Reviews/>
                 
            </div>
            <div className={s.divMobileReservationCard}>
            <MobileReservationCard/>
            </div>

            <div className={s.divReservationCard}>
            <ReservationCard/>
           
            </div>
            </div>
        </main>
        </main>

        </>
    )
}