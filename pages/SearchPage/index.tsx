import { NavBAr } from '../../components/navBar';
import { Header } from '../../components/header';
import s from './styles.module.scss';

export default function SearchPage(){
    return(
        <>
        <main className={s.mainContainer}>
        <main className={s.SecondMainContainer}>
            {/* NAVBAR */}
            <NavBAr/>
            {/* HEADER */}
            <Header/>
            <div className={s.divContainer}>
            {/* SEARCH SIDE BAR */}
            <div className={s.divContent} >
                <div className={s.one}>
                <h1>Region</h1>
                <p>Toronto</p>
                <p>Ottawa</p>
                <p>Montreal</p>
                <p>Hamilton</p>
                <p>Kingston</p>
                <p>Niagara</p>
                </div>
                <div className={s.two}>
                <h1>Cuisine</h1>
                <p>Mexican</p>
                <p>Italian</p>
                <p>Chinese</p>
                </div>
                <div className={s.three}>
                <h1>Price</h1>
                <div>
                    <button className={s.button}>
                    $
                    </button>
                    <button>
                    $$
                    </button>
                    <button>
                    $$$
                    </button>
                </div>
                </div>
            </div>
            {/* SEARCH SIDE BAR */}
            <div className={s.cardContainer}>
                {/* RESAURANT CAR */}
                <div className={s.div}>
                <img
                    src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
                    alt=""
                />
                <div className={s.info}>
                    <h2>Aiāna Restaurant Collective</h2>
                    <div className={s.divOne}>
                    <p>*****</p>
                    <p>Awesome</p>
                    </div>
                    <div className={s.divTwo}>
                    
                        <p>$$$</p>
                        <p>Mexican</p>
                        <p>Ottawa</p>
                    
                    </div>
                    <div>
                    <a href="">View more information</a>
                    </div>
                </div>
                </div>
                {/* RESAURANT CAR */}
            </div>
            </div>
        </main>
        </main>

        </>
    )
}