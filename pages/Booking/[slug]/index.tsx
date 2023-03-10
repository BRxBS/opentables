import { NavBAr } from '../../../components/navBar';
import { Header } from '../../../components/header';
import s from '../styles.module.scss';

export default function Booking(){
    
    return(
        <>
    <main className={s.mainContainer}>
        <main className={s.mainContent}>
            {/* NAVBAR */}
            <NavBAr/>
            {/* NAVBAR END */}
        <div className={s.divContainer}>
            <div className={s.divContent} >

                {/* HEADER */}
                <div>
                <h3 >You're almost done!</h3>
                <div className={s.divWrapper} >
                    <img
                    src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
                    alt=""
          
                    />
                    <div className={s.divInfo} >
                    <h1>
                        Aiāna Restaurant Collective
                    </h1>
                    <div >
                        <p >Tues, 22, 2023</p>
                        <p >7:30 PM</p>
                        <p >3 people</p>
                    </div>
                    </div>
                </div>
                </div>
                {/* HEADER */} 
                
                {/* FORM */}
                <form>
                <input
                    type="text"
                    placeholder="First name"
                />
                <input
                    type="text"
                    placeholder="Last name"
                />
                <input
                    type="text"
                    placeholder="Phone number"
                />
                <input
                    type="text"
                    placeholder="Email"
                />
                <input
                    type="text"
                    placeholder="Occasion (optional)"
                />
                <input
                    type="text"
                    placeholder="Requests (optional)"
                />
                <button>
                    Complete reservation
                </button>
                <p>
                    By clicking “Complete reservation” you agree to the OpenTable Terms
                    of Use and Privacy Policy. Standard text message rates may apply.
                    You may opt out of receiving text messages at any time.
                </p>
                </form>
            </div>
         </div>
        </main>
    </main>

        </>
    )
}