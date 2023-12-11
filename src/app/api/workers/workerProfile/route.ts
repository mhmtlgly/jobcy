import { NextRequest, NextResponse } from "next/server"

import { prisma } from "@/utils/prismadb"

export async function POST(request: NextRequest, response: NextResponse) {
  const body = await request.json()

  const { id } = await body

  try {
    const workerProfile = await prisma.workerProfile.create({
      data: {
        account: {
          connect: {
            id,
          },
        },
      },
    })

    console.log({ workerProfile })

    return NextResponse.json(workerProfile, { status: 200 })
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
