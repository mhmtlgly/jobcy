import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"

import { prisma } from "@/utils/prismadb"
import { accountValidation } from "@/components/Forms/CreateAccountForm/validation"

export async function POST(request: NextRequest, response: NextResponse) {
  const body = await request.json()
  try {
    const { email, password, role } = accountValidation.parse(body)

    if (!email || !password || !role) {
      return new NextResponse("Missing Fields", { status: 400 })
    }

    const accountExist = await prisma.account.findUnique({
      where: {
        email,
      },
    })

    if (accountExist) {
      throw new Error("Email already exists")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const account = await prisma.account.create({
      data: {
        email,
        password: hashedPassword,
        role,
      },
    })

    return NextResponse.json({ data: account, success: true }, { status: 200 })
  } catch (error) {
    console.error({ error })
    return NextResponse.json(
      {
        error,
        success: false,
      },
      { status: 500 }
    )
  }
}
