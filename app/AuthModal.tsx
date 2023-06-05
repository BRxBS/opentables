"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./styles/home.module.scss";
import { AuthInputs } from "../components/AuthModalInputs";
import useAuth from "../hooks/useAuth";
import { AuthentiocationContext } from "./context/AuthContext";
import { Alert, CircularProgress } from "@mui/material";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "22rem",
    bgcolor: "background.paper",
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
};

export default function AuthModal({ isSignin }: { isSignin: boolean }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const { signin, signup } = useAuth();

    const { data, error, loading, setAuthState } = React.useContext(
        AuthentiocationContext
    );
    const handleClose = () => {
        console.log("error", error);
        return setOpen(false);
    };

    const [inputs, setInputs] = React.useState({
        first_name: "",
        last_name: "",
        city: "",
        email: "",
        password: "",
        phone: "",
    });
    const [disabled, setDisabled] = React.useState(true);

    React.useEffect(() => {
        if (isSignin) {
            if (inputs.password && inputs.email) {
                return setDisabled(false);
            }
        } else {
            if (
                inputs.password &&
                inputs.email &&
                inputs.first_name &&
                inputs.last_name &&
                inputs.city &&
                inputs.phone
            ) {
                return setDisabled(false);
            }
        }
    }, [inputs]);

    const handleClick = () => {
        if (isSignin) {
            signin({ email: inputs.email, password: inputs.password }).catch(
                () => {
                    if (!error) {
                        setOpen(true);
                    }
                }
            );
        } else {
            signup({
                firstName: inputs.first_name,
                last_name: inputs.last_name,
                city: inputs.city,
                email: inputs.email,
                password: inputs.password,
                phone: inputs.phone,
            }).catch(() => {
                if (!error) {
                    setOpen(true);
                }
            });
        }
    };

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };

    const renderContent = (signinContent: string, signinupContent: string) => {
        return isSignin ? signinContent : signinupContent;
        // this function has the logic of if else to determine what content to render depending
        // on the boolean type,true or false
    };

    return (
        <>
            {open && (
                <div>
                    <button
                        onClick={handleOpen}
                        className={renderContent(styles.signin, styles.signup)}
                    >
                        {renderContent("Sign in", "Sign up")}
                    </button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            {loading ? (
                                <div className={styles.divCircularProgress}>
                                    <CircularProgress />
                                </div>
                            ) : (
                                <div className={styles.modelContainer}>
                                    <div className={styles.modelContent}>
                                        <p>{data?.firstName}</p>
                                        <p className={styles.pText}>
                                            {renderContent(
                                                "Sign in",
                                                "Creat Account"
                                            )}
                                        </p>
                                    </div>
                                    <div>
                                        <h2>
                                            {renderContent(
                                                "Log Into Your Account",
                                                "Create Your OpenTable Account"
                                            )}
                                        </h2>
                                        <AuthInputs
                                            inputs={inputs}
                                            handleChangeInput={
                                                handleChangeInput
                                            }
                                            isSignin={isSignin}
                                        />
                                        {error ? (
                                            <div className={styles.divAlert}>
                                                <Alert severity="error">
                                                    {error}
                                                </Alert>
                                            </div>
                                        ) : null}

                                        <button
                                            onClick={handleClick}
                                            disabled={disabled}
                                            className={renderContent(
                                                styles.buttonSignin,
                                                styles.buttonCreateAccount
                                            )}
                                        >
                                            {renderContent(
                                                "Sign in",
                                                "Create Account"
                                            )}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </Box>
                    </Modal>
                </div>
            )}
        </>
    );
}
