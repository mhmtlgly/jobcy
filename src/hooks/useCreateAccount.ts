import { useMutation, useQueryClient } from "react-query"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import type { AxiosError } from "axios"

import { AccountType } from "@/components/Forms/CreateAccountForm/validation"
import { axios } from "@/utils"

export function useCreateAccount() {
  const queryClient = useQueryClient()
  const router = useRouter()
  const { mutateAsync } = useMutation(
    (data: AccountType) => axios.post("accounts", data),
    {
      onSuccess(data, variables, context) {
        toast.success(
          "Account creation successful. You will be redirected to the sign-in page.",
          { position: "bottom-center" }
        )
        queryClient.invalidateQueries("accounts")
        router.push("/account")
      },
      onError(error: AxiosError<{ error: string }>, variables, context) {
        toast.error(error.response?.data.error, { position: "bottom-center" })
      },
    }
  )

  const createAccount = async (data: AccountType) => {
    try {
      await mutateAsync(data)
    } catch (error) {
      console.log({ error })
    }
  }

  return { createAccount }
}
