import Link from "next/link"

import { Icon } from "@/components"

export default function HomePage() {
  return (
    <div className="relative h-full flex flex-col gap-10 items-center justify-center select-none">
      <div className="flex flex-wrap justify-center gap-2 lg:gap-10">
        <Icon
          icon={"logos:react"}
          className="h-8 w-8 lg:h-14 lg:w-14 opacity-70"
        />
        <Icon
          icon={"logos:redux"}
          className="h-8 w-8 lg:h-14 lg:w-14 opacity-70"
        />
        <Icon
          icon={"logos:git-icon"}
          className="h-8 w-8 lg:h-14 lg:w-14 opacity-70"
        />
        <Icon
          icon={"logos:typescript-icon"}
          className="h-8 w-8 lg:h-14 lg:w-14 opacity-70"
        />
        <Icon
          icon={"logos:javascript"}
          className="h-8 w-8 lg:h-14 lg:w-14 opacity-70"
        />
        <Icon
          icon={"logos:graphql"}
          className="h-8 w-8 lg:h-14 lg:w-14 opacity-70"
        />
        <Icon
          icon={"logos:react-query-icon"}
          className="h-8 w-8 lg:h-14 lg:w-14 opacity-70"
        />
      </div>
      <div className="z-10 relative">
        <div className="text-center grid gap-2">
          <div className="text-2xl font-semibold grid gap-1">
            <span>Search between more than</span>
            <span className="text-6xl font-semibold">1.000+ IT Jobs</span>
          </div>
          <div>
            Find jobs, create trackable resumes and enrich your applications.
          </div>
        </div>
        <div className="flex">
          <Link
            href="/jobs"
            className="inline-flex duration-300 items-center gap-2 hover:gap-3 px-8 py-4 mt-8 mx-auto hover:bg-brand-50 border border-brand-950 transition-all rounded justify-between"
          >
            <div>Find a Job</div>
            <div>
              <Icon icon={"heroicons:arrow-long-right"} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

/* <div className="relative h-full flex flex-col items-center justify-center bg-[url('/img1.jpg')] bg-cover"> */

/* <div className="inset-0 bg-zinc-50/95"></div> */

/* <div className="flex gap-4 flex-wrap">
        <Icon icon={"logos:react"} className="h-10 w-10 opacity-20" />

        <Icon icon={"logos:redux"} className=" h-10 w-10 opacity-20" />
        <Icon icon={"logos:git-icon"} className=" h-10 w-10  opacity-20" />
        <Icon
          icon={"logos:typescript-icon"}
          className=" h-10 w-10 opacity-20"
        />
        <Icon icon={"logos:javascript"} className=" h-10 w-10 opacity-20" />
        <Icon icon={"logos:graphql"} className=" h-10 w-10 opacity-20" />
        <Icon
          icon={"logos:react-query-icon"}
          className=" h-10 w-10 opacity-20"
        />
      </div> */
