import { NextResponse } from "next/server";
import validator from "validator";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const { firstName, lastName, email, password, phone, city } = await request.json();
  const errors: string[] = [];

  const validationSchema = [
    {
      valid: validator.isLength(firstName, {
        min: 1,
        max: 20
      }),
      errorMessage: "First name is Invalid"
    },
    {
      valid: validator.isLength(lastName, {
        min: 1,
        max: 20
      }),
      errorMessage: "Last name is Invalid"
    },
    {
      valid: validator.isEmail(email),
      errorMessage: "Email is Invalid"
    },
    {
      valid: validator.isStrongPassword(password),
      errorMessage: "Password is Invalid"
    },
    {
      valid: validator.isMobilePhone(phone),
      errorMessage: "Phone number is Invalid"
    },
    {
      valid: validator.isLength(city, {
        min: 1
      }),
      errorMessage: "City is Invalid"
    },
  ]

  validationSchema.forEach((check) => {
    if (!check.valid) {
      errors.push(check.errorMessage)
    }
  })

  if (errors.length) {
    return new NextResponse(JSON.stringify({ errorMessage: errors[0] }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  const useWithEmail = await prisma.user.findUnique({
    where: {
      email
    }
  })
  if(useWithEmail){
    return new NextResponse(JSON.stringify({ errorMessage: "you already have a account on OpenTables" }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  return NextResponse.json({ firstName, lastName, email, password, phone, city });
}



// import { NextResponse } from "next/server";
// import validator  from "validator";

// export async function POST(request: Request) {
//   const {firstName,lastName,email, password, phone, city} = await request.json();
//   const res = await request.json();
//   const errors: string[] = [];


//   const validationSchema = [
//     {
//         valid: validator.isLength(firstName,{
//           min: 1,
//           max: 20
//         }),
//         errorMessage:"Fisrt name is Invalid"
//     },
//     {
//       valid: validator.isLength(lastName,{
//         min: 1,
//         max: 20
//       }),
//       errorMessage:"Last name is Invalid"
//   },
//   {
//     valid: validator.isEmail(email),
//     errorMessage:"Email is Invalid"
// },
// {
//   valid: validator.isStrongPassword(password),
//   errorMessage:"Fisrt name is Invalid"
// },
// {
//   valid: validator.isMobilePhone(phone),
//   errorMessage:"Phone number is Invalid"
// },
// {
//   valid: validator.isLength(city,{
//     min: 1
//   }),
//   errorMessage:"City is Invalid"
// },

// ]

//     validationSchema.forEach((check)=>{
//       if(!check.valid){
//         errors.push(check.errorMessage)
//       }
//     })

//     if(errors.length){
//       return res.stutas(400).json({errorMessage: errors[0]})
//     }

//       return NextResponse.json(res);
//     }



export async function GET(req: Request, res: Response) {
  

    return NextResponse.json({
      hello: "hi"
    });
  }





// import { NextApiRequest, NextApiResponse } from "next";

// request: NextApiRequest, response:NextApiResponse 
// export async function POST(req: Request, res: Response) {
  
  
//   if (req.method === 'POST') {
//     const body = req.body;

//     return NextResponse.json({
//       hello: body
//     });
//   }


// }