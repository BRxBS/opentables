import { NextRequest, NextResponse } from "next/server"
import * as jose from "jose"


export async function middleware(req: Request){

    // start of define the authorization
    const bearerToken = req.headers.get("authorization")

    if(!bearerToken){
        return new NextResponse(JSON.stringify({ errorMessage: "Unauthorized request" }), {
          status: 401,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
// end of define the authorization

/* ******************************************************************* */

// start spliting the token 

      const token = bearerToken.split(" ")[1]// after the space (" ") the second element [1]
      if(!token){
        return new NextResponse(JSON.stringify({ errorMessage: "Unauthorized request" }), {
          status: 401,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
// end spliting the token

/* ******************************************************************* */

// start verifing

    const secret = new TextEncoder().encode(process.env.JWT_SECRET)

      try{
        await jose.jwtVerify(token, secret)
      }catch (error){
        return new NextResponse(JSON.stringify({ errorMessage: "Unauthorized request" }), {
            status: 401,
            headers: {
                'Content-Type': 'application/json'
              }
          });
      }

// end verifing

}

export const config = {
    matcher: [ //this especifiy to the middleware the paths that it has to authenticate
        "/api/auth/me"
    ] //
}