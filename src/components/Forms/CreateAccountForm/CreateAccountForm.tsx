"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { usePathname } from "next/navigation"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { accountValidation, AccountType } from "./validation"
import { useCreateAccount } from "@/hooks"

export const CreateAccountForm = () => {
  const { createAccount } = useCreateAccount()
  const pathname = usePathname()
  const role = pathname.includes("worker") ? "worker" : "employer"
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AccountType>({
    resolver: zodResolver(accountValidation),
    defaultValues: {
      role,
    },
  })

  return (
    <>
      <ToastContainer />
      <div className="max-w-xl mx-auto">
        <h2 className="mb-10">{`Create ${role
          .charAt(0)
          .toUpperCase()
          .concat(role.slice(1))} Account`}</h2>
        <form
          onSubmit={handleSubmit(createAccount)}
          className="grid gap-8 border rounded p-4"
        >
          <div className="grid gap-1">
            <label htmlFor="email">E-Mail</label>
            <input type="email" placeholder="Email" {...register("email")} />
            {errors.email && <p role="alert">{errors.email?.message}</p>}
          </div>
          <div className="grid gap-1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              {...register("password")}
            />
            {errors.password && <p role="alert">{errors.password?.message}</p>}
          </div>
          <button
            type="submit"
            className={`capitalize border p-4 ${
              isSubmitting ? "bg-gray-50" : "bg-black text-white"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating Account..." : "Sign up"}
          </button>
        </form>
      </div>
    </>
  )
}
