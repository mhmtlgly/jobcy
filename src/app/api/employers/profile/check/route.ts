import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

import { prisma } from "@/utils/prismadb"

const employerProfileCheckValidation = z.object({
  id: z.string(),
})

export async function POST(request: NextRequest, response: NextResponse) {
  const body = await request.json()
  const { id } = employerProfileCheckValidation.parse(body)

  try {
    const employerProfile = await prisma.employerProfile.findFirst({
      where: {
        accountId: id,
      },
      include: {
        jobs: true,
      },
    })

    if (!employerProfile) {
      console.log(`No Employer Profile with id: ${id} was found.`)
      return NextResponse.json(
        {
          error: `No Employer Profile with id: ${id} was found.`,
          success: false,
        },
        { status: 404 }
      )
    }
    return NextResponse.json(
      { data: employerProfile, success: true },
      { status: 200 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        error,
        success: false,
      },
      { status: 500 }
    )
  }
}
