import { PrismaClient } from '@prisma/client';
import { NavBar } from '../../../../components/navBar';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { RestaurantNavBar } from '../components/RestaurantNavBar';
import s from './styles.module.scss';

const prisma = new PrismaClient()

const fetchMenu =async (slug:string) => {
    const restaurant = await prisma.restaurant.findUnique({
        where:{
            slug
        },
        select: {
            items: true
        }
    })
    if(!restaurant){
        throw new Error()
    }
    return restaurant.items
}

export default async function RestaurantMenu({params}: {params: {slug: string}}){
const menu = await fetchMenu(params.slug)

    return(
        <>
    <main className={s.mainContainer}>
        <main className={s.SecondMainContainer}>
   
            <NavBar/>
    
            <Header name=''/>
          
            <div className={s.description}>
            <div className={s.div}>

            <RestaurantNavBar slug={params.slug}/> 
            <Menu menu={menu}/>
            </div>
            </div>
        </main>
        </main>

        </>
    )
}