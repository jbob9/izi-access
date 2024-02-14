export default function BlockTest() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto max-w-4xl md:auto-rows-[22rem]">
      <div className="row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-card border-border border justify-between flex flex-col space-y-4 md:col-span-1">
        <div className="flex h-full flex-col gap-2">
          <img
          src="/scott-graham-5fNmWej4tAA-unsplash.jpg"
          className="object-cover rounded-lg w-full max-h-44"
          alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-terminal "
          >
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" x2="20" y1="19" y2="19"></line>
          </svg>
          <p className="text-lg font-semibold">Setup en 5 secondes</p>
          <p className="text-sm text-muted-foreground">
            <span className="text-sm">
              J'ai créé un CLI qui te permet de setup un projet au niveau d'une
              entreprise.
            </span>
          </p>
        </div>
      </div>
      <div className="row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-card border-border border justify-between flex flex-col space-y-4 [&amp;>p:text-lg] md:col-span-1">
        <div className="flex flex-row flex-wrap gap-2">
          <img
          src="/covene-BtHRjAiNDR4-unsplash.jpg"
          className="object-cover rounded-lg w-full max-h-44"
          alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-rocket "
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
          </svg>
          <p className="text-lg font-semibold">Stack Moderne</p>
          <p className="text-sm text-muted-foreground">
            <span className="text-sm">
              Pas besoin de perdre des heures à choisir, j'ai déjà fait le
              travail pour toi.
            </span>
          </p>
        </div>
      </div>
      <div className="row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-card border-border border justify-between flex flex-col space-y-4 [&amp;>p:text-lg] md:col-span-1">
        <div className="overflow-hidden rounded-md">
          <img
          src="/austin-distel-wD1LRb9OeEo-unsplash.jpg"
          className="object-cover rounded-lg w-full max-h-44"
          alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-mail "
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          <p className="text-lg font-semibold">Gestion des emails</p>
          <p className="text-sm text-muted-foreground">
            <span className="text-sm">
              Envoie des emails marketing de manière simple avec Resend.
            </span>
          </p>
        </div>
      </div>
      <div className="row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-card border-border border justify-between flex flex-col space-y-4 [&amp;>p:text-lg] md:col-span-2">
        <div className="flex flex-1 flex-row gap-4">
          <img
          src="/sigmund-Rj5OIPWEmCE-unsplash.jpg"
          className="object-cover rounded-lg w-full max-h-52"
          alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-video "
          >
            <path d="m22 8-6 4 6 4V8Z"></path>
            <rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect>
          </svg>
          <p className="text-lg font-semibold">
            6 ans d'expérience dans une codebase
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="text-sm">
              Toutes les méthodes, snippets et utility que j'utilise
              quotidiennement sont intégrés par défaut dans le projet.
            </span>
          </p>
        </div>
      </div>
      <div className="row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-card border-border border justify-between flex flex-col space-y-4 [&amp;>p:text-lg] md:col-span-1">
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
