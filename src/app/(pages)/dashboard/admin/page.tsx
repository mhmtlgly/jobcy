"use client"

import { axios } from "@/utils"

export default function AdminPage() {
  const deleteJobs = async () => {
    try {
      axios({
        method: "POST",
        url: "admin",
      })
    } catch (error) {
      console.error({ error })
    }
  }
  return (
    <div>
      <div className="grid gap-4">
        <h2 className="font-semibold text-2xl flex items-center gap-2">
          ADMIN DASHBOARD
        </h2>
        <button onClick={deleteJobs}>delete jobs</button>
      </div>
    </div>
  )
}
