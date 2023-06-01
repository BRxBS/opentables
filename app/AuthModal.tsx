"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from '../styles/home.module.scss'
import { AuthInputs } from '../components/AuthModalInputs';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({isSignin}:{isSignin: boolean}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputs, setInputs] = React.useState({
    first_name: "",
    last_name: "",
    city: "",
    email:"",
    password: "",
    phone:""
  })

  const handleChangeInput = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  const renderContent = (signinContent: string, signinupContent: string) => {
    return  isSignin ? signinContent : signinupContent
  }

  return (
    <div>
      <button onClick={handleOpen} 
      className={renderContent(styles.signin, styles.signup)}>
        {renderContent("Sign in", "Sign up")}

      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className={styles.modelContainer}>

                <div className={styles.modelContent}>
                    <p className={styles.pText}>
                    {renderContent("Sign in", "Creat Account")}
                    </p>
                </div>
                <div>
                    <h2>
                    {renderContent("Log Into Your Account", "Create Your OpenTable Account")} 
                    </h2>
                    <AuthInputs 
                    inputs={inputs} 
                    handleChangeInput={handleChangeInput}
                    isSignin={isSignin}/>
                    <button   
                    className={renderContent(styles.buttonSignin, styles.buttonCreateAccount)}>
                               {renderContent("Sign in", "Create Account")}
                    </button>
                </div>

            </div>
        </Box>
      </Modal>
    </div>
  );
}