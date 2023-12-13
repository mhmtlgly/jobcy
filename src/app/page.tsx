import Link from "next/link"

import { Icon, Container } from "@/components"

export default function HomePage() {
  return (
    <Container className="m-auto">
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
    </Container>
  )
}
