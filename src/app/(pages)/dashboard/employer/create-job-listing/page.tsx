import { CreateJobListingForm, Icon } from "@/components"

export default function CreateJobListingPage() {
  return (
    <div>
      <div className="grid gap-4">
        <h2 className="font-semibold text-2xl flex items-center gap-2">
          <Icon icon="heroicons:pencil-square" />
          Create new Job Listing
        </h2>
        <CreateJobListingForm />
      </div>
    </div>
  )
}
