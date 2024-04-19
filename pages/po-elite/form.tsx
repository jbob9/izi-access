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
import { useToast } from "@/components/ui/use-toast";
import { formationFormSchema } from "@/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon, ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const PoEliteForm = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formationFormSchema>>({
    resolver: zodResolver(formationFormSchema),
  });

  async function onSubmit(values: z.infer<typeof formationFormSchema>) {
    try {
      setLoading(true);
      // const user = await signUp({
      //   email: values.email,
      //   password: values.password,
      //   name: `${values.firstname} ${values.lastname}`,
      //   firstname: values.firstname,
      //   lastname: values.lastname,
      //   country: values.country,
      //   address: values.address
      // });
  
      // if(user){
      //   await signIn('sanity-login', {
      //     redirect: false,
      //     email: values.email,
      //     password: values.password
      //   });
      // }
      const response = await fetch("/api/formation", {
        method: "POST",
        body: JSON.stringify(values),
      });
      if (response.ok) {
        toast({
          title: "Your request have been accepted.",
        })
      }
    } catch (e) {
      setLoading(false);
    }

    setLoading(false);
  }

  return (
    <div className="xl:container mx-3 md:m-auto pt-24 md:px-12 lg:px-20">
      <div className="px-2 pt-8 pb-16 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h1 className="text-3xl font-bold leading-7 text-gray-900">
            FORMATION
          </h1>
          <p className="text-sm opacity-80 leading-relaxed pt-2">
            Formulaire de Demande de Formation
          </p>

          <div className="pt-8">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Pourquoi Choisir Izi Access pour Votre Formation ?
            </h2>
            <div className="pt-4 space-y-6">
              <div className="flex space-x-2">
                <CheckIcon className="text-green-500 w-10 h-10" />
                <p className="text-sm opacity-90 leading-relaxed">
                  {" "}
                  Nous proposons des programmes de formation personnalisés
                  adaptés à vos besoins spécifiques et à vos objectifs
                  professionnels.
                </p>
              </div>
              <div className="flex space-x-2">
                <CheckIcon className="text-green-500 w-10 h-10" />
                <p className="text-sm opacity-90 leading-relaxed">
                  {" "}
                  Nos formateurs sont des experts dans leur domaine, offrant des
                  connaissances et des compétences de pointe pour vous aider à
                  réussir.
                </p>
              </div>
              <div className="flex space-x-2">
                <CheckIcon className="text-green-500 w-10 h-10" />
                <p className="text-sm opacity-90 leading-relaxed">
                  {" "}
                  En plus de la formation, vous aurez accès à une variété de
                  ressources supplémentaires pour enrichir votre expérience
                  d'apprentissage.
                </p>
              </div>
              <div className="flex space-x-2">
                <CheckIcon className="text-green-500 w-10 h-10" />
                <p className="text-sm opacity-90 leading-relaxed">
                  {" "}
                  En participant à nos formations, vous aurez l'opportunité de
                  rencontrer d'autres professionnels de votre domaine et de
                  développer votre réseau.
                </p>
              </div>
              <div className="flex space-x-2">
                <CheckIcon className="text-green-500 w-10 h-10" />
                <p className="text-sm opacity-90 leading-relaxed">
                  {" "}
                  Nous restons à votre disposition même après la formation pour
                  vous fournir un soutien et des conseils supplémentaires selon
                  vos besoins.
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
                    <FormLabel>Telelphone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Numero de telephone"
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
                name="message"
                render={({ field }) => (
                  <FormItem className="col-span-full">
                    <FormLabel>Objectif de la formation</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={6}
                        placeholder="Objectif de la formation"
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

export default PoEliteForm;
