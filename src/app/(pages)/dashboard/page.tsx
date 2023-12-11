"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"
import { useQuery } from "react-query"

import { axios } from "@/utils"
import { redirect } from "next/navigation"
// import { CreateEmployerProfileForm, Icon } from "@/components"

export default function DashboardPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated: () => {
      redirect("/account")
    },
  })

  const { isLoading, error, data } = useQuery({
    queryFn: () =>
      axios({
        url: "employers/profile/check",
        method: "POST",
        data: {
          id: session?.user.id,
        },
      }),
    queryKey: ["employer-profile-check"],
    enabled: !!session?.user.id,
  })

  return (
    <>
      {session?.user ? (
        <div>
          {/* <pre>{JSON.stringify(data, null, 3)}</pre> */}

          {data?.data.success ? (
            <div>
              <Link
                href="/dashboard/create-job-listing"
                className="border rounded p-4 inline-flex items-center gap-2"
              >
                post job
                {/* <Icon icon="heroicons:plus-small" /> */}
              </Link>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 border border-red-700 bg-red-50 p-4 rounded text-red-700 max-w-fit">
                {/* <Icon icon="lucide:alert-circle" /> */}
                <h3>Complete your Employer Profile</h3>
              </div>
              {/* <CreateEmployerProfileForm /> */}
            </div>
          )}
          <h2 className="text-2xl">Dashboard</h2>
        </div>
      ) : null}
    </>
  )
}
