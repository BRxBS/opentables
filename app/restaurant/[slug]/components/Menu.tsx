import { Item } from '@prisma/client';
import { MenuCard } from './MenuCard';
import s from './styles.module.scss';

export function Menu({menu}: {menu: Item[]}){
    return(
        <main className={s.menu}>
        <div>
            <div className={s.one}>
            <h1 >Menu</h1>
            </div>
            {
                menu.length 
                ?  menu.map((item) => (
                    <MenuCard key={item.id} item={item}/>))          
                :
                <h1>This restaurant doesn't have any menu available</h1>
            }
          
        
        </div>
        </main>
    )
}