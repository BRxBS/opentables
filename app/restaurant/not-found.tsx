"use client"
import s from './styles.module.scss';
import errorMascot from '../../public/icons/error.png'
import Image from 'next/image'


export default function Error({error}: {error: Error}){
return(
    <>
    <div className={s.error}>
        <Image src={errorMascot} alt='error' className={s.errorImg}/>
        <div >
            <h3>Well, this is embarrassing</h3>
            <p>An Error Occurred</p>
            <p className={s.errorMessege}>{error.message}</p>
            <p className={s.error400}>Error 404</p>
        </div>
    </div>
    
    
    </>
)
}