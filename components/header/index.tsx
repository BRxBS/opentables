import styles from './styles.module.scss';


export function Header(){
    return(
        <>
            <header className={styles.header}>
                <div className={styles.divWrapper}>
                <h1>
                    Find your table for any occasion
                </h1>
                {/* SEARCH BAR */}
                <div>
                    <input
                    type="text"
                    placeholder="State, city or town"
                    />
                    <button >
                    Let's go
                    </button>
                </div>
                {/* SEARCH BAR */}
                </div>
            </header>
        </>
    )
}