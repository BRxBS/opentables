"use client";
import styles from "./styles/home.module.scss";
import errorMascot from "../public/icons/error.png";
import Image from "next/image";

export default function Error({ error }: { error: Error }) {
    return (
        <>
            <div className={styles.error}>
                <Image
                    src={errorMascot}
                    alt="error"
                    className={styles.errorImg}
                />
                <div>
                    <h3>Well, this is embarrassing</h3>
                    <p>An Error Occurred</p>
                    <p className={styles.error400}>{error.message}</p>
                    <p className={styles.error400}>Error 400</p>
                </div>
            </div>
        </>
    );
}
