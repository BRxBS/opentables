import axios from "axios";
import { removeCookies } from "cookies-next";
import { Context, useContext } from "react";
import { AuthentiocationContext } from "../app/context/AuthContext";

function useAuth() {
    const { data, error, loading, setAuthState } = useContext(
        AuthentiocationContext
    );
    async function signin({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) {
        setAuthState({
            data: null,
            error: null,
            loading: true,
        });

        try {
            const response = await axios.post(
                "http://localhost:3000/api/auth/signin",
                {
                    email,
                    password,
                }
            );

            setAuthState({
                data: response.data,
                error: null,
                loading: false,
            });
        } catch (error: any) {
            setAuthState({
                data: null,
                error: error.response.data.errorMessage,
                loading: false,
            });

            console.log("alo");
        }
    }

    async function signup({
        email,
        password,
        city,
        phone,
        firstName,
        last_name,
    }: {
        city: string;
        phone: string;
        firstName: string;
        last_name: string;
        email: string;
        password: string;
    }) {
        // handleClose: () => void
        setAuthState({
            data: null,
            error: null,
            loading: true,
        });
        try {
            const response = await axios.post(
                "http://localhost:3000/api/auth/signup",
                {
                    email,
                    password,
                    city,
                    phone,
                    firstName,
                    last_name,
                }
            );
            setAuthState({
                data: response.data,
                error: null,
                loading: false,
            });
            // handleClose();
        } catch (error: any) {
            setAuthState({
                data: null,
                error: error.response.data.errorMessage,
                loading: false,
            });
        }
    }

    async function signout() {
        removeCookies("jwt");
        setAuthState({
            data: null,
            error: null,
            loading: false,
        });
    }

    return { signin, signup, signout };
}

export default useAuth;
