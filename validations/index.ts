 
import { z } from "zod"
 
export const savePersonalInfoSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  country: z.string(),
  // password: z.string().min(8),
  address: z.string(),
})

export const acceptConditionSchema = z.object({
  email: z.string().email(),
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

export const formationFormSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  phonenumber: z.string(),
  message: z.string()
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


export const accountFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  bio: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
});


export const programmeEliteFormSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  sexe: z.string(),
  birthdate: z.string(),
  email: z.string().email(),
  address: z.string(),
  phonenumber: z.string(),
  nationality: z.string(),
  residance_country: z.string(),
  activity: z.string(),
  why: z.string()
})