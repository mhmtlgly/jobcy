import Link from "next/link"

import { Icon } from "@/components"

export default function SignUpPage() {
  return (
    <div>
      <h2 className="mb-6 text-4xl">Create Account</h2>
      <div className="flex flex-col lg:flex-row gap-8 lg:justify-center">
        <div>
          <div className="grid justify-items-center border p-10 pt-4 rounded">
            <Icon
              icon="heroicons:user"
              className="border rounded-full p-2 w-14 h-14 mb-4"
            />
            <h3 className="font-semibold text-3xl text-gray-600 mb-1">
              Worker Account
            </h3>
            <h2>
              Looking for a <span className="font-bold text-lg">job</span>?
            </h2>
            <Link
              href="/account/sign-up/worker"
              className="border border-brand-950 p-4 rounded inline-block mt-6"
            >
              Create Worker Account
            </Link>
          </div>
        </div>

        <div>
          <div className="grid justify-items-center border p-10 pt-4 rounded">
            <Icon
              icon="heroicons:building-office"
              className="border rounded-full p-2 w-14 h-14 mb-4"
            />
            <h3 className="font-semibold text-3xl text-gray-600 mb-1">
              Employer Account
            </h3>
            <h2>
              Are you <span className="font-bold text-lg">hiring</span>?
            </h2>
            <Link
              href="/account/sign-up/employer"
              className="border border-brand-950 p-4 rounded inline-block mt-6"
            >
              Create Employer Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
