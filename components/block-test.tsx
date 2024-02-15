import Skeleton from "./Skeleton";
import EventCard from "./events/event-card";

export default function BlockTest() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto max-w-4xl md:auto-rows-[22rem]">
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
      <div className="row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-card border-border border justify-between flex flex-col space-y-4 md:col-span-1">
        <div className="flex flex-col gap-2">
          <p className="font-bold">Login</p>
        </div>
        <div className="flex flex-col gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-key size-4 text-neutral-500"
          >
            <circle cx="7.5" cy="15.5" r="5.5"></circle>
            <path d="m21 2-9.6 9.6"></path>
            <path d="m15.5 7.5 3 3L22 7l-3-3"></path>
          </svg>
          <p className="text-lg font-semibold">Authentification gratuite</p>
          <p className="text-sm text-muted-foreground">
            <span className="text-sm">
              Suppression de compte, mot de passe, OAuth, etc. Tout est géré
              sans avoir besoin de payer un SaaS.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
