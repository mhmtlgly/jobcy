import { Metadata } from "next"
import Link from "next/link"

import { prisma } from "@/utils"
import { Icon } from "@/components"

export const metadata: Metadata = {
  title: "Jobs",
  description: "All Jobs listing",
}

export async function getJobs() {
  return await prisma.jobListing.findMany({
    take: 100,
  })
}

export default async function JobsPage() {
  const jobs = await getJobs()
  return (
    <div>
      <h2>ALL JOBS PAGE</h2>
      <div>
        {/* filtering and sorting */}
        <button className="inline-flex p-2 items-center gap-1 border rounded mr-auto">
          <div>
            <Icon icon="heroicons:arrows-up-down" />
          </div>
          <div>Sort</div>
        </button>
        <button className="inline-flex p-2 items-center gap-1 border rounded mr-auto">
          <div>
            <Icon icon="heroicons:adjustments-horizontal" />
          </div>
          <div>Filter</div>
        </button>
      </div>
      <div>
        {jobs.map((job) => {
          return (
            <div>
              <pre>{JSON.stringify(job, null, 3)}</pre>
            </div>
          )
        })}
      </div>
    </div>
  )
}
