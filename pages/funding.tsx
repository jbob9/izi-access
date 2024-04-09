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
import { CheckIcon, ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Photo by <a href="https://unsplash.com/@osilost?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Osman Yunus Bekcan</a> on <a href="https://unsplash.com/photos/woman-in-white-crew-neck-shirt-R6Z9o3lGDmI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

//Photo by <a href="https://unsplash.com/@wocintechchat?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Christina @ wocintechchat.com</a> on <a href="https://unsplash.com/photos/photography-of-people-inside-room-during-daytime-rg1y72eKw6o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

const Funding = () => {
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
      <div className="px-2 pt-8 pb-16 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h1 className="text-3xl font-bold leading-7 text-gray-900">
            FINANCEMENT
          </h1>
          <p className="text-sm opacity-80 leading-relaxed pt-2">
            Formulaire de Demande de Financement
          </p>

          <div className="pt-8">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Pourquoi Choisir Izi Access pour Votre Financement ?
            </h2>
            <div className="pt-4 space-y-6">
              <div className="flex space-x-2">
                <CheckIcon className="text-green-500 w-10 h-10" />
                <p className="text-sm opacity-90 leading-relaxed">
                  {" "}
                  Nous proposons une variété de solutions de financement, y
                  compris des subventions, des prêts et des investissements en
                  capital, pour répondre à vos besoins spécifiques.
                </p>
              </div>
              <div className="flex space-x-2">
                <CheckIcon className="text-green-500 w-10 h-10" />
                <p className="text-sm opacity-90 leading-relaxed">
                  {" "}
                  Grâce à notre réseau de partenaires et d'investisseurs, nous
                  vous offrons un accès facilité aux financements pour soutenir
                  vos projets et vos entreprises.
                </p>
              </div>
              <div className="flex space-x-2">
                <CheckIcon className="text-green-500 w-10 h-10" />
                <p className="text-sm opacity-90 leading-relaxed">
                  {" "}
                  Notre processus de demande de financement est simple et
                  transparent, conçu pour vous offrir une expérience sans tracas
                  et une réponse rapide.
                </p>
              </div>
              <div className="flex space-x-2">
                <CheckIcon className="text-green-500 w-10 h-10" />
                <p className="text-sm opacity-90 leading-relaxed">
                  {" "}
                  Notre équipe de professionnels expérimentés vous accompagnera
                  tout au long du processus de demande de financement pour vous
                  fournir un soutien et des conseils personnalisés.
                </p>
              </div>
              <div className="flex space-x-2">
                <CheckIcon className="text-green-500 w-10 h-10" />
                <p className="text-sm opacity-90 leading-relaxed">
                  {" "}
                  En plus du financement, vous bénéficierez de l'accès à une
                  variété de ressources supplémentaires pour vous aider à
                  réussir dans votre projet ou votre entreprise
                </p>
              </div>
            </div>
          </div>
        </div>
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
              <Button
                type="submit"
                className="rounded-2xl w-full"
                disabled={loading}
              >
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

export default Funding;
