"use client";

import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";
import s from "./styles.module.scss";

interface data {
    cuisine: Cuisine[];
    location: Location[];
    searchParams: { city?: string; cuisine?: string; price?: PRICE };
}
export function SideBar({ cuisine, location, searchParams }: data) {
    return (
        <>
            <aside className={s.asideContent}>
                <div className={s.one}>
                    <h1>Region</h1>
                    {location.map((location) => (
                        <Link
                            href={{
                                pathname: "/search",
                                query: {
                                    ...searchParams,
                                    city: location.name,
                                },
                            }}
                            key={location.id}
                        >
                            {location.name}
                        </Link>
                    ))}
                </div>
                <div className={s.two}>
                    <h1>Cuisine</h1>
                    {cuisine.map((cuisine) => (
                        <Link
                            href={{
                                pathname: "/search",
                                query: {
                                    ...searchParams,
                                    cuisine: cuisine.name,
                                },
                            }}
                            key={cuisine.id}
                        >
                            {cuisine.name}
                        </Link>
                    ))}
                </div>
                <div className={s.three}>
                    <h1>Price</h1>
                    <div>
                        <Link
                            href={{
                                pathname: "/search",
                                query: {
                                    ...searchParams,
                                    price: PRICE.CHEAP,
                                },
                            }}
                            className={s.button}
                        >
                            $
                        </Link>
                        <Link
                            href={{
                                pathname: "/search",
                                query: {
                                    ...searchParams,
                                    price: PRICE.REGULAR,
                                },
                            }}
                        >
                            $$
                        </Link>
                        <Link
                            href={{
                                pathname: "/search",
                                query: {
                                    ...searchParams,
                                    price: PRICE.EXPENSIVE,
                                },
                            }}
                        >
                            $$$
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    );
}
