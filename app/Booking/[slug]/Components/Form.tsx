import s from './styles.module.scss';

export function Form(){
    return(
        <form className={s.form}>
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
    )
}