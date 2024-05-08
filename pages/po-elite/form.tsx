import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { programmeEliteFormSchema } from "@/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, CheckIcon, ReloadIcon } from "@radix-ui/react-icons";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const PoEliteForm = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof programmeEliteFormSchema>>({
    resolver: zodResolver(programmeEliteFormSchema),
  });

  async function onSubmit(values: z.infer<typeof programmeEliteFormSchema>) {
    try {
      setLoading(true);
      const response = await fetch("/api/po-elite", {
        method: "POST",
        body: JSON.stringify(values),
      });
      if (response.ok) {
        toast({
          title: "Your request have been applied",
        });
        router.push("/po-elite");
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
            FORMULAIRE DE CANDIDATURE
          </h1>
          <p className="text-sm opacity-80 leading-relaxed pt-2">
            Ce programme est destiné a tous les professionnels, artistes et
            entrepreneurs qui souhaitent venir faire une experience au Canada
          </p>

          <div className="pt-8">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Pourquoi voulez-vous participer au Programme Elite?
            </h2>
            <div className="pt-4 space-y-6">
              <div className="flex space-x-2">
                <CheckIcon className="text-green-500 w-10 h-10" />
                <p className="text-sm opacity-90 leading-relaxed">
                  {" "}
                  Notre mission est de créer une plateforme inclusive qui
                  célèbre l'excellence et promeut le développement
                  professionnel, culturel et économique au sein de la communauté
                  noire.
                </p>
              </div>
              <div className="flex space-x-2">
                <CheckIcon className="text-green-500 w-10 h-10" />
                <p className="text-sm opacity-90 leading-relaxed">
                  {" "}
                  Le Programme Elite propose une série d'événements stimulants,
                  notamment des conférences, des concerts, des spectacles
                  artistiques et des formations professionnelles.
                </p>
              </div>
              <div className="flex space-x-2">
                <CheckIcon className="text-green-500 w-10 h-10" />
                <p className="text-sm opacity-90 leading-relaxed">
                  {" "}
                  Chez Programme Elite, nous croyons fermement en l'excellence
                  sous toutes ses formes. Nous nous engageons à fournir des
                  expériences de qualité exceptionnelle à nos participants.
                </p>
              </div>
              <div className="flex space-x-2">
                <CheckIcon className="text-green-500 w-10 h-10" />
                <p className="text-sm opacity-90 leading-relaxed">
                  {" "}
                  Que vous soyez un professionnel en quête de développement de
                  carrière, un artiste désireux de partager votre art avec le
                  monde, ou un entrepreneur ambitieux à la recherche de
                  nouvelles opportunités.
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
                    <FormLabel>Prenom</FormLabel>
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
                    <FormLabel>Nom</FormLabel>
                    <FormControl>
                      <Input placeholder="Last name" required {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sexe"
                render={({ field }) => (
                  <FormItem className="sm:col-span-3">
                    <FormLabel>Choisir son sexe</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a sexe" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="birthdate"
                render={({ field }) => (
                  <FormItem className="sm:col-span-3">
                    <FormLabel>Date de naissance</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Date de naissance"
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
                name="email"
                render={({ field }) => (
                  <FormItem className="col-span-full">
                    <FormLabel>Addresse Mail</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Addresse Mail"
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
                name="residance_country"
                render={({ field }) => (
                  <FormItem className="sm:col-span-3">
                    <FormLabel>Pays</FormLabel>
                    <FormControl>
                      <Input placeholder="Pays" required {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nationality"
                render={({ field }) => (
                  <FormItem className="sm:col-span-3">
                    <FormLabel>Nationalite</FormLabel>
                    <FormControl>
                      <Input placeholder="Nationalite" required {...field} />
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
                      <Input
                        placeholder="Votre Addresse"
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
                name="activity"
                render={({ field }) => (
                  <FormItem className="col-span-full">
                    <FormLabel>
                      Vous voulez participez dans quelle categorie d’activite?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selectionnez un activite" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="concert">Concert</SelectItem>
                        <SelectItem value="humour">Humour</SelectItem>
                        <SelectItem value="slam">Slam/Poesie</SelectItem>
                        <SelectItem value="conference">Conference</SelectItem>
                        <SelectItem value="formation">Formation PAB</SelectItem>
                        <SelectItem value="concours-eloquence ">Concours Eloquence</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="why"
                render={({ field }) => (
                  <FormItem className="col-span-full">
                    <FormLabel>
                      Pourquoi voulez-vous participer au Programme Elite?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={6}
                        placeholder="-Pourquoi voulez-vous participer au Programme Elite?"
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
