"use client"

import { useForm } from "react-hook-form"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast, ToastContainer } from "react-toastify"
import { zodResolver } from "@hookform/resolvers/zod"

import { SignInDataType, signInValidation } from "./validation"
import { useUser } from "@/hooks"
import { Container, Heading } from "@/components"

export function SignInForm() {
  const router = useRouter()
  const user = useUser()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInDataType>({
    resolver: zodResolver(signInValidation),
  })

  const onSubmit = async (data: SignInDataType) => {
    const { email, password } = data

    const response = await signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard",
      redirect: false,
    })

    if (response?.ok && user?.role) {
      router.push(`/dashboard/${user.role}`)
    } else {
      console.log(response?.error)
      toast("Credentials do not match!", {
        type: "error",
        position: "bottom-center",
      })
    }
  }

  return (
    <>
      <ToastContainer className="top-1/2" />
      <Container className="max-w-screen-sm mx-auto">
        <Heading className="mb-10">Login to your Account</Heading>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-8 border rounded p-4"
        >
          <Container className="grid gap-1">
            <label htmlFor="email">E-Mail</label>
            <input type="email" placeholder="Email" {...register("email")} />
            {errors.email && <p role="alert">{errors.email?.message}</p>}
          </Container>
          <Container className="grid gap-1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              {...register("password")}
            />
            {errors.password && <p role="alert">{errors.password?.message}</p>}
          </Container>

          <button className="capitalize">sign in</button>
        </form>
        <Container className="mt-10">
          Don't have an account?{" "}
          <Link
            href="/account/sign-up"
            className="text-brand-800 capitalize font-medium"
          >
            sign up
          </Link>
        </Container>
      </Container>
    </>
  )
}
