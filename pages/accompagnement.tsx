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
import { Textarea } from "@/components/ui/textarea";
import { accompagnementFormSchema } from "@/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon, ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Accompaniement = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof accompagnementFormSchema>>({
    resolver: zodResolver(accompagnementFormSchema),
  });

  async function onSubmit(values: z.infer<typeof accompagnementFormSchema>) {
    setLoading(true);
    // await

    setLoading(false);
  }

  return (
    <div className="xl:container mx-3 md:m-auto pt-20 md:px-12 lg:px-20">
      <div className="px-2 pt-8 pb-16 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h1 className="text-3xl font-bold leading-7 text-gray-900">
            ACCOMPAGNEMENT PERSONNALISE
          </h1>
          <p className="text-sm opacity-80 leading-relaxed pt-2">
            Formulaire de Demande d'Accompagnement Personnalisé
          </p>

          <div className="pt-8">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Pourquoi Choisir Izi Access pour Votre Accompagnement Personnalisé
              ?
            </h2>
            <div className="pt-4 space-y-6">
              <div className="flex space-x-2">
                <CheckIcon className="text-green-500 w-10 h-10" />
                <p className="text-sm opacity-90 leading-relaxed">
                  {" "}
                  Nous vous proposons un accompagnement personnalisé adapté à
                  vos besoins, vos objectifs et votre situation spécifique.
                </p>
              </div>
              <div className="flex space-x-2">
                <CheckIcon className="text-green-500 w-10 h-10" />
                <p className="text-sm opacity-90 leading-relaxed">
                  {" "}
                  Nos conseillers expérimentés vous fourniront des conseils
                  stratégiques et des solutions personnalisées pour vous aider à
                  atteindre vos objectifs.
                </p>
              </div>
              <div className="flex space-x-2">
                <CheckIcon className="text-green-500 w-10 h-10" />
                <p className="text-sm opacity-90 leading-relaxed">
                  {" "}
                  Nous restons à vos côtés tout au long de votre parcours pour
                  vous fournir un soutien continu et vous aider à surmonter les
                  obstacles.
                </p>
              </div>
              <div className="flex space-x-2">
                <CheckIcon className="text-green-500 w-10 h-10" />
                <p className="text-sm opacity-90 leading-relaxed">
                  {" "}
                  Nous prenons en compte tous les aspects de votre vie
                  professionnelle et personnelle pour vous offrir un
                  accompagnement complet et équilibré.
                </p>
              </div>
              <div className="flex space-x-2">
                <CheckIcon className="text-green-500 w-10 h-10" />
                <p className="text-sm opacity-90 leading-relaxed">
                  {" "}
                  : Nous nous engageons à vous aider à atteindre des résultats
                  tangibles et mesurables qui auront un impact significatif sur
                  votre vie et votre carrière.
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
                name="phonenumber"
                render={({ field }) => (
                  <FormItem className="col-span-full">
                    <FormLabel>Telephone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Telephone"
                        type="string"
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
                name="message"
                render={({ field }) => (
                  <FormItem className="col-span-full">
                    <FormLabel>Message et Objectifs</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={6}
                        placeholder="Message et Objectifs"
                        required
                        {...field}
                      />
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
