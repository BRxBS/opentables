import styles from './styles.module.scss';

interface Props{
   inputs: {
        first_name: string,
        last_name: string,
        city: string,
        email:string,
        password: string,
        phone: string
      };
      handleChangeInput: (e:  React.ChangeEvent<HTMLInputElement>) => void;
      isSignin: boolean;
}

export function AuthInputs({inputs, handleChangeInput, isSignin}: Props){

    return(
    <>

        <div className={styles.authinput}>
                    {isSignin ? null :   
                   ( <div>
                            <input 
                            type='text' 
                            placeholder='First Name' 
                            value={inputs.first_name} 
                            onChange={handleChangeInput}
                            name="firstName"
                            className={styles.input}/>

                            <input 
                            type='text' 
                            placeholder='Last Name' 
                            value={inputs.last_name} 
                            onChange={handleChangeInput}
                            name="lastName"
                            className={styles.input}/>

                    </div>) }
              

                <div className={styles.divEmailPassword}>
                <input 
                type='email' 
                placeholder='Email' 
                value={inputs.email} 
                onChange={handleChangeInput}
                name="email"
                className={styles.inputEmail}/>
                <input 
                type='password' 
                placeholder='Password' 
                value={inputs.password} 
                onChange={handleChangeInput}
                name="password"
                className={styles.inputPassword}/>
                </div>
                {isSignin ? null :   
                   (          
                        <div>
                            <input 
                            type='text' 
                            placeholder='Phone' 
                            value={inputs.phone} 
                            onChange={handleChangeInput}
                            name="phone"
                            className={styles.input}/>
                            <input 
                            type='text' 
                            placeholder='City' 
                            value={inputs.city} 
                            onChange={handleChangeInput}
                            name="city"
                            className={styles.input}/>          
                        </div>) }

        </div>
    </>
    )
}