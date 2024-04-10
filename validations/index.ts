 
import { z } from "zod"
 
export const savePersonalInfoSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  country: z.string(),
  password: z.string().min(8),
  address: z.string(),
})

export const acceptConditionSchema = z.object({
  accept: z.boolean(),
})

export const fundingFormSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  phonenumber: z.string(),
  rising: z.number(),
  objectif: z.string(),
  description: z.string(),
  more_info: z.string()
})

export const accompagnementFormSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  address: z.string(),
  phonenumber: z.string(),
  entreprise: z.string(),
  message: z.string(),
})