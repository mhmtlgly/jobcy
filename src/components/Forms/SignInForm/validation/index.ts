import { z } from "zod"

export const signInValidation = z.object({
  email: z.string().email("Please, provide a valid E-Mail"),
  password: z.string().min(8, "Password needs to be at least 8 characters."),
})

export type SignInDataType = z.infer<typeof signInValidation>
