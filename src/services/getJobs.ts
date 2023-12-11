import { prisma } from "@/utils"

export async function getAllJobs() {
  return await prisma.jobListing.findMany({
    take: 100,
    include: {
      employer: true,
    },
    // orderBy: { offer: { salary: "desc" } },
    // skip: 10,
    orderBy: {
      offer: {
        salary: "desc",
      },
    },
  })
}
