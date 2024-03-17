import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { savePersonalInfoSchema } from "@/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Accompaniement = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof savePersonalInfoSchema>>({
    resolver: zodResolver(savePersonalInfoSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      country: "us",
      address: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof savePersonalInfoSchema>) {
    setLoading(true);
    // await

    setLoading(false);
  }

  return (
    <div className="xl:container mx-3 md:m-auto pt-24 md:px-12 lg:px-20">
      <div className="px-2 pt-8 pb-16 lg:px-8">
        <h2 className="text-xl font-semibold leading-7 text-gray-900">
          Demander un accompagnement
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                      <Input
                        placeholder="Email address"
                        type="email"
                        required
                        {...field}
                      />
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
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
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
            </div>
            <div className="mt-5 flex items-center justify-end gap-x-6">
              <Button type="submit" className="rounded-2xl" disabled={loading}>
                {loading ? (
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                Appliquer
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Accompaniement;
