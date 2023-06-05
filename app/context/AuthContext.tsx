"use client";
import React, { useState, createContext, useEffect } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";

interface User {
    id: number;
    firstName: string;
    lastName: string;
    city: string;
    email: string;
    password: string;
    phone: string;
}

interface State {
    loading: boolean;
    error: string | null;
    data: User | null;
}

interface AuthState extends State {
    setAuthState: React.Dispatch<React.SetStateAction<State>>;
}

export const AuthentiocationContext = createContext<AuthState>({
    loading: false,
    data: null,
    error: null,
    setAuthState: () => {},
});

export default function AuthContex({
    children,
}: {
    children: React.ReactNode;
}) {
    const [authState, setAuthState] = useState<State>({
        loading: true,
        data: null,
        error: null,
    });
    // const { fetchUser } = useAuth();
    async function fetchUser() {
        setAuthState({
            data: null,
            error: null,
            loading: true,
        });
        try {
            const jwt = getCookie("jwt");
            console.log("jwt", jwt);

            if (!jwt) {
                return setAuthState({
                    data: null,
                    error: null,
                    loading: false,
                });
            }
            const response = await axios.get(
                "http://localhost:3000/api/auth/me",
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            console.log("response", response);
            axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
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
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <AuthentiocationContext.Provider
            value={{
                ...authState,
                setAuthState,
            }}
        >
            {children}
        </AuthentiocationContext.Provider>
    );
}
