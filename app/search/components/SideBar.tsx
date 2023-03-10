import s from './styles.module.scss';

export function SideBar(){

    return(
        <>
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
        </>
    )
}