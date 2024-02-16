import { ArrowRightIcon } from "@sanity/icons";
import Skeleton from "./Skeleton";
import EventCard from "./events/event-card";
import { Button } from "./ui/button";
import Link from "next/link";

export default function BlockTest() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto max-w-5xl md:auto-rows-[22rem]">
      <EventCard
        title={"Setup en 5 secondes"}
        description={
          "J'ai créé un CLI qui te permet de setup un projet au niveau d'une entreprise."
        }
        header={
          <div className="flex h-full flex-col gap-2">
            <img
              src="/scott-graham-5fNmWej4tAA-unsplash.jpg"
              className="object-cover rounded-lg w-full max-h-44"
              alt=""
            />
          </div>
        }
      />
      <EventCard
        title={"Stack Moderne"}
        description={
          "Pas besoin de perdre des heures à choisir, j'ai déjà fait le travail pour toi."
        }
        header={
          <div className="flex h-full flex-col gap-2">
            <img
              src="/covene-BtHRjAiNDR4-unsplash.jpg"
              className="object-cover rounded-lg w-full max-h-44"
              alt=""
            />
          </div>
        }
      />
      <EventCard
        title={"Gestion des emails"}
        description={
          "Envoie des emails marketing de manière simple avec Resend."
        }
        header={
          <div className="flex h-full flex-col gap-2">
            <img
              src="/austin-distel-wD1LRb9OeEo-unsplash.jpg"
              className="object-cover rounded-lg w-full max-h-44"
              alt=""
            />
          </div>
        }
      />
      <EventCard
        title={"6 ans d'expérience dans une codebase"}
        description={
          "Toutes les méthodes, snippets et utility que j'utilise quotidiennement sont intégrés par défaut dans le projet."
        }
        header={
          <div className="flex h-full flex-col gap-2">
            <img
              src="/sigmund-Rj5OIPWEmCE-unsplash.jpg"
              className="object-cover rounded-lg w-full max-h-44"
              alt=""
            />
          </div>
        }
        className="md:col-span-2"
      />
      <div className="row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-card border-border border justify-center flex flex-col space-y-4 md:col-span-1">
        <div className="flex flex-col gap-2">
          <p className="font-bold">Events</p>
        </div>
        <div className="flex flex-col gap-2">
          {/* <p className="text-lg font-semibold">Authentification gratuite</p> */}
          <p className="text-sm text-muted-foreground">
            <span className="text-sm">
              Suppression de compte, mot de passe, OAuth, etc. Tout est géré
              sans avoir besoin de payer un SaaS.
            </span>
          </p>
          <Button className="mt-2 w-full">
            <Link href="/events" className="flex items-center">
              See all <ArrowRightIcon className="w-6 h-6 ml-3" stroke="2"/>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
