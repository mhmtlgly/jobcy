import { NextRequest, NextResponse } from "next/server"

import { prisma } from "@/utils/prismadb"
import { jobListingValidation } from "@/components/Forms/CreateJobListingForm/validation"

export async function POST(request: NextRequest, response: NextResponse) {
  const body = await request.json()
  const data = jobListingValidation.parse(body)
  console.log({ data })

  try {
    const employerProfile = await prisma.employerProfile.findFirst({
      where: {
        accountId: data.accountId,
      },
    })

    if (employerProfile) {
      const createdJobListing = await prisma.jobListing.create({
        data: {
          description: data.description,
          offer: {
            benefits: {
              bike: data.offer.benefits.bike,
              car: data.offer.benefits.car,
              ticket: data.offer.benefits.ticket,
              holidays: data.offer.benefits.holidays,
            },
            employmentType: data.offer.employmentType,
            position: data.offer.position,
            role: data.offer.role,
            location: data.offer.location,
            salary: data.offer.salary,
          },
          requirements: {
            education: data.requirements.education,
            experience: data.requirements.experience,
            techStack: data.requirements.techStack,
          },
          employer: {
            connect: {
              id: employerProfile.id,
            },
          },
        },
      })

      return NextResponse.json(
        { employerProfile, createdJobListing, success: true },
        { status: 200 }
      )
    }
  } catch (error) {
    console.log({ error })
    return NextResponse.json(
      {
        success: false,
        error,
      },
      { status: 400 }
    )
  }
}
