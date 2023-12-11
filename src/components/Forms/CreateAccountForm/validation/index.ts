import { z } from "zod"

export const accountValidation = z.object({
  email: z.string().email("Please, provide a valid E-Mail"),
  password: z.string().min(8, "Password needs to be at least 8 characters."),
  role: z.string().optional(),
})

export type AccountType = z.infer<typeof accountValidation>
