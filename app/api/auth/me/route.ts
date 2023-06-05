import { NextResponse } from "next/server";
import * as jose from "jose";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request, res: Response) {
    // start of define the authorization
    const bearerToken = req.headers.get("authorization");
    if (!bearerToken) {
        //  this if  didn't need to be here 'cause this is alredy being checked on the middleware
        //  but type is being a B**ch and it is yelling!!!
        return new NextResponse(
            JSON.stringify({ errorMessage: "Unauthorized request" }),
            {
                status: 401,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
    const token = bearerToken.split(" ")[1]; // after the space (" ") the second element [1]

    /* ******************************************************************* */

    // start verifing

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    try {
        await jose.jwtVerify(token, secret);
    } catch (error) {
        return new NextResponse(
            JSON.stringify({ errorMessage: "Unauthorized request" }),
            {
                status: 401,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }

    // end verifing

    /* ******************************************************************* */

    // start the decoding

    const payload = jwt.decode(token) as { email: string };
    if (!payload.email) {
        return new NextResponse(
            JSON.stringify({ errorMessage: "Unauthorized request" }),
            {
                status: 401,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
    const user = await prisma.user.findUnique({
        where: {
            email: payload.email,
        },
        select: {
            id: true,
            first_name: true,
            last_name: true,
            email: true,
            city: true,
            phone: true,
        },
    });
    if (!user) {
        return new NextResponse(
            JSON.stringify({ errorMessage: "User Not Found" }),
            {
                status: 401,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }

    return NextResponse.json({
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        city: user.city,
        phone: user.phone,
    });
}
