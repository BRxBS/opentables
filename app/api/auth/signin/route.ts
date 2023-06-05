import { NextResponse } from "next/server";
import validator from "validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import * as jose from "jose";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const { email, password } = await req.json();
    const errors: string[] = []; // array of errors

    // start validation with error messages
    const validationSchema = [
        {
            valid: validator.isEmail(email),
            errorMessage: "Email is Invalid",
        },
        {
            valid: validator.isLength(password, { min: 1 }),
            errorMessage: "Password is Invalid",
        },
    ];

    validationSchema.forEach((check) => {
        if (!check.valid) {
            errors.push(check.errorMessage);
        }
    });

    if (errors.length) {
        return new NextResponse(JSON.stringify({ errorMessage: errors[0] }), {
            status: 400,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
    // end validation with error messages

    /* ******************************************************************* */

    // start of fiding user
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        return new NextResponse(
            JSON.stringify({ errorMessage: "Email or password is invalid" }),
            {
                status: 401,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return new NextResponse(
            JSON.stringify({ errorMessage: "Email or password is invalid" }),
            {
                status: 401,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
    // start of fiding user

    /* ******************************************************************* */

    // start of creating a JWT

    const alg = "HS256"; // algorithm type - Signing Algorithm

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const token = await new jose.SignJWT({
        //SignJWT -to create a new token
        email: user.email, //unique identifier
    })
        .setProtectedHeader({ alg })
        .setExpirationTime("24h")
        .sign(secret);

    // end of creating a JWT

    /* ******************************************************************* */

    // start of creating a Jwt cookie
    const json = JSON.stringify({
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        phone: user.phone,
        city: user.city,
    });

    return new NextResponse(json, {
        status: 200,
        headers: {
            "content-type": "application/json; charset=utf-8",
            "Set-Cookie": `jwt=${token}; Max-Age=8640; Path=/`,
        },
    });
    // end of creating a Jwt cookie

    // return NextResponse.json(token);
}
