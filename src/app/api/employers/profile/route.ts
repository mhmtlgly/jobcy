import { NextRequest, NextResponse } from "next/server"

import { prisma } from "@/utils/prismadb"
import { employerProfileValidation } from "@/components/Forms/CreateEmployerProfileForm/validation"

export async function POST(request: NextRequest, response: NextResponse) {
  const body = await request.json()

  const data = employerProfileValidation.parse(body)

  try {
    const employerProfile = await prisma.employerProfile.create({
      data: {
        info: {
          contact: {
            email: data.contact.email,
            website: data.contact.website,
            phone: data.contact.phone,
            representative: data.contact.representative,
          },
          location: data.location,
          name: data.name,
          logo: data.logo,
          teamsize: data.teamSize,
        },
        account: {
          connect: {
            id: data.accountId,
          },
        },
      },
    })

    console.log({ employerProfile })

    return NextResponse.json(employerProfile, { status: 200 })
  } catch (error) {
    console.error("Error creating account:", error)
    return NextResponse.json(
      {
        error: "Error creating account",
      },
      { status: 500 }
    )
  }
}
