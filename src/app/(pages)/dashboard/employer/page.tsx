"use client"

import Link from "next/link"
import { useQuery } from "react-query"

import { axios } from "@/utils"
// import { CreateEmployerProfileForm, Icon } from "@/components"
import { useUser } from "@/hooks/useUser"
import { SignOutButton } from "@/components/SignOutButton"

export default function EmployerDashboardPage() {
  const user = useUser()

  const { data } = useQuery({
    queryFn: () =>
      axios({
        url: "employers/profile/check",
        method: "POST",
        data: {
          id: user?.id,
        },
      }),
    queryKey: ["employer-profile-check"],
    enabled: !!user?.id,
    retry: false,
  })

  return (
    <div>
      <h2 className="text-2xl">Dashboard / Employer</h2>
      <SignOutButton />
      <pre>{JSON.stringify(data, null, 3)}</pre>
      {data?.data.success ? (
        <div>
          <div>
            {/* You have {data.data.employerProfile.jobs.length} jobs listings */}
          </div>
          <div>
            <Link
              href="/dashboard/employer/create-job-listing"
              className="border rounded p-4 inline-flex items-center gap-2"
            >
              post job
              {/* <Icon icon="heroicons:plus-small" /> */}
            </Link>
          </div>
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
    </div>
  )
}
