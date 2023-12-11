import { Metadata } from "next"

import { amountToEuro, prisma } from "@/utils"
import { Icon } from "@/components"

type JobDetailPageProps = {
  params: { id: string }
  // searchParams: { [key: string]: string | string[] | undefined }
}

const getJob = async (id: string) => {
  return await prisma.jobListing.findFirst({
    where: {
      id,
    },
  })
}

export async function generateMetadata(params: { id: string }) {
  const job = await getJob(params.id)

  return {
    title: job?.description,
    description: job?.description,
  }
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const job = await getJob(params.id)
  return (
    <div>
      <pre>{JSON.stringify(job, null, 3)}</pre>
    </div>
  )
}
