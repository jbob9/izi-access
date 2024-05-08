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
import { savePersonalInfoSchema } from "@/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { toast } from "../ui/use-toast";

interface Props {
  handleChangeSection: (section: string) => void;
  handleAddEmail: (email: string) => void;
}

const MemberShipLoginForm = ({
  handleChangeSection,
  handleAddEmail,
}: Props) => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof savePersonalInfoSchema>>({
    resolver: zodResolver(savePersonalInfoSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      country: "",
      address: "",
      // password: ''
    },
  });

  async function onSubmit(values: z.infer<typeof savePersonalInfoSchema>) {
    setLoading(true);
    try {
      setLoading(true);
      const response = await fetch("/api/sanity/create-user", {
        method: "POST",
        body: JSON.stringify(values),
      });
      if (response.ok) {
        handleAddEmail(values.email);
        handleChangeSection("condition-info");
      } else {
        const data = await response.json();
        toast({ title: data?.message, variant: "destructive" });
      }
    } catch (e) {
      setLoading(false);
    }
    setLoading(false);
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="space-y-12">
        <div className="pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Informations personnelles
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Utilisez une adresse email permanente où vous pouvez recevoir du
            courrier.
          </p>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Ce sera privé et non partagé
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-3">
                      <FormLabel>Prenom</FormLabel>
                      <FormControl>
                        <Input placeholder="Prenom" required {...field} />
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
                      <FormLabel>Nom</FormLabel>
                      <FormControl>
                        <Input placeholder="Nom" required {...field} />
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
                      <FormLabel>Addresse mail</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Addresse mail"
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
                      <FormLabel>Pays</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Pays"
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
                  name="address"
                  render={({ field }) => (
                    <FormItem className="col-span-full">
                      <FormLabel>Addresse</FormLabel>
                      <FormControl>
                        <Input placeholder="Addresse" required {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <FormField
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
                /> */}
              </div>
              <div className="mt-7 flex items-center justify-end gap-x-6">
                <Button
                  type="submit"
                  className="rounded-2xl w-full"
                  disabled={loading}
                >
                  {loading ? (
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  ) : null}
                  Enregister
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MemberShipLoginForm;
