import { NextResponse } from "next/server";
import validator from "validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import * as jose from "jose";

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const { firstName, lastName, email, password, phone, city } =
        await request.json();
    const errors: string[] = []; // array of errors

    // start validation with error messages
    const validationSchema = [
        {
            valid: validator.isLength(firstName, {
                min: 1,
                max: 20,
            }),
            errorMessage: "First name is Invalid",
        },
        {
            valid: validator.isLength(lastName, {
                min: 1,
                max: 20,
            }),
            errorMessage: "Last name is Invalid",
        },
        {
            valid: validator.isEmail(email),
            errorMessage: "Email is Invalid",
        },
        {
            valid: validator.isStrongPassword(password),
            errorMessage: "Password is Invalid",
        },
        {
            valid: validator.isMobilePhone(phone),
            errorMessage: "Phone number is Invalid",
        },
        {
            valid: validator.isLength(city, {
                min: 1,
            }),
            errorMessage: "City is Invalid",
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

    // start validation unique email
    const useWithEmail = await prisma.user.findUnique({
        where: {
            email,
        },
    });
    if (useWithEmail) {
        return new NextResponse(
            JSON.stringify({
                errorMessage: "you already have a account on OpenTables",
            }),
            {
                status: 400,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
    // end validation unique email

    /* ******************************************************************* */

    // start hash the passaword
    const hashedPassaword = await bcrypt.hash(password, 10); // the 10 adds 10 caracters to the right of salt in the passaword (caracters to make the password stronger)
    // end hash the passaword

    /* ******************************************************************* */

    // start of creating a new user
    const user = await prisma.user.create({
        data: {
            first_name: firstName,
            last_name: lastName,
            password: hashedPassaword,
            email,
            phone,
            city,
        },
    });
    // end of creating a new user

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
