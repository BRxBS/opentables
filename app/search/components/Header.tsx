"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './styles.module.scss';


export function Header(){
    const router = useRouter()
    const [location, setLocation] = useState("")
    return(
        <>
            <header className={styles.header}>
                <div className={styles.divWrapper}>
                <div>
                    <input
                    type="text"
                    placeholder="State, city or town"
                    value={location}
                    onChange ={(e) => setLocation(e.target.value)}
  
                    />
                    <button 
                    onClick = {() => {
                    if(location === 'banana') return;
                    router.push("/search")
             }}>
                    Let's go
                    </button>
                </div>   
                
                </div>
            </header>
        </>
    )
}