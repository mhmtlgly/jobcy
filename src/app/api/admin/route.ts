import { NextRequest, NextResponse } from "next/server"

import { prisma } from "@/utils/prismadb"

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    await prisma.jobListing.deleteMany()

    return NextResponse.json({ status: 200 })
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
