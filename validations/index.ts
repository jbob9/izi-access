 
import { z } from "zod"
 
export const savePersonalInfoSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  country: z.string(),
  password: z.string().min(8),
  address: z.string(),
})