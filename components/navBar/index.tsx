"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import AuthModal from "../../app/AuthModal";
import { useContext } from "react";
import { AuthentiocationContext } from "../../app/context/AuthContext";
import useAuth from "../../hooks/useAuth";

export function NavBar() {
    const { data, loading } = useContext(AuthentiocationContext);
    const { signout } = useAuth();

    return (
        <>
            <nav className={styles.nav}>
                <Link href="/"> OpenTable </Link>

                {data && <p>Hello{data?.firstName}</p>}
                <div>
                    {loading ? null : (
                        <div>
                            {data ? (
                                <button
                                    className={styles.butSignout}
                                    onClick={signout}
                                >
                                    SignOut
                                </button>
                            ) : (
                                <>
                                    <AuthModal isSignin={true} />
                                    <AuthModal isSignin={false} />
                                </>
                            )}
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}
