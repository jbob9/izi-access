import { savePersonalInfoSchema } from "@/validations"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "../ui/select";
import { signUp } from 'next-auth-sanity/client';
import { signIn } from 'next-auth/react';
import { ReloadIcon } from "@radix-ui/react-icons"
import { useState } from "react"

interface Props {
  handleChangeSection: (section: string) => void
}

const MemberShipLoginForm = ({ handleChangeSection }: Props) => {
  const [loading, setLoading] = useState(false)
  const form = useForm<z.infer<typeof savePersonalInfoSchema>>({
    resolver: zodResolver(savePersonalInfoSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      country: 'us',
      address: '',
      password: ''
    },
  })
 
  async function onSubmit(values: z.infer<typeof savePersonalInfoSchema>) {
    setLoading(true)
    const user = await signUp({
      email: values.email,
      password: values.password,
      name: `${values.firstname} ${values.lastname}`,
      firstname: values.firstname,
      lastname: values.lastname,
      country: values.country,
      address: values.address
    });

    if(user){
      await signIn('sanity-login', {
        redirect: false,
        email: values.email,
        password: values.password
      });
      handleChangeSection('condition-info')
    }
    setLoading(false)
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="space-y-12">
        <div className="pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This will be private and not shared
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem className="sm:col-span-3">
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input placeholder="First name" required {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem className="sm:col-span-3">
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last name" required {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="col-span-full">
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input placeholder="Email address" type="email" required {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="col-span-full">
                    <FormLabel>Country</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a country" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="ht">Haiti</SelectItem>
                        </SelectContent>
                      </Select>
                    <FormMessage />
                  </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="col-span-full">
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Address" required {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="col-span-full">
                    <FormLabel>Password (To protect and save your identity)</FormLabel>
                    <FormControl>
                      <Input placeholder="********" type="password" required {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
              </div>
              <div className="mt-5 flex items-center justify-end gap-x-6">
                <Button type="submit" className="rounded-2xl" disabled={loading}>
                  {loading ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />: null}
                  Save personal info
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default MemberShipLoginForm