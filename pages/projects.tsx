import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@sanity/icons";

export const projects = [
  {
    name: 'Lancement du Centre Communautaire "CHEZ MANMI BARBARA"',
    description:
      'Nous sommes  fiers de soutenir le lancement du Centre Communautaire "CHEZ MANMI BARBARA" à Montréal. Ce centre servira de point de rencontre et de ressources pour la communauté noire, offrant des programmes éducatifs, culturels et sociaux.',
    image: "/centre-communotaire.jpeg",
    building: true,
    donation: true,
  },
  {
    name: "Construction d'une École pour les Orphelins en Haïti",
    description:
      'Nous sommes  fiers de soutenir le lancement du Centre Communautaire "CHEZ MANMI BARBARA" à Montréal. Ce centre servira de point de rencontre et de ressources pour la communauté noire, offrant des programmes éducatifs, culturels et sociaux.',
    image: "/const-ecole.jpeg",
    building: true,
    donation: true,
  },
  {
    name: "Izi Transfer",
    description:
      "Izi Transfer est une plateforme de recharge en ligne qui permet aux membres de la communauté noire d'envoyer des Top-Up rapidement, en toute sécurité et à moindre coût à leurs proches à l'étranger, notamment en Haïti. Grâce à des partenariats stratégiques avec des fournisseurs de services financiers, Izi Transfer a simplifié le processus de transfert de Top-Up transfrontalier, offrant ainsi une solution pratique et abordable pour répondre aux besoins de la diaspora.",
    image: "/izi-transfer-2.jpeg",
    building: false,
    donation: false,
  },
  {
    name: "Izi Connect",
    description: `Izi Connect est une plateforme communautaire en ligne conçue pour rassembler les elites de
    communaute noire et favoriser l'échange de connaissances, d'expériences et d'opportunités.
    Cette plateforme offre un espace virtuel où les membres peuvent se connecter, partager des
    ressources, poser des questions et trouver du soutien dans leur parcours professionnel,
    entrepreneurial et personnel. Izi Connect vise à renforcer les liens au sein de la communauté
    noire et à promouvoir la collaboration et la solidarité entre ses membres.`,
    image: "/izi-connect-2.jpeg",
    building: false,
    donation: false,
  },
  {
    name: "Cantave. K Comedy Club",
    description: `Cantave. K Comedy Club est un projet artistique et culturel visant à promouvoir le talent des
    artistes comiques haïtiens au Canada. Ce club de comédie offre une plateforme pour les artistes
    comiques haïtiens de présenter leur travail, de développer leur art et de se connecter avec le
    public. Grâce à des spectacles réguliers, des événements spéciaux et des collaborations avec
    d'autres artistes et organisations, Cantave. K Comedy Club contribue à faire connaître et
    apprécier la riche tradition comique de la culture haïtienne`,
    image: "/cantavek-2.jpeg",
    building: false,
    donation: false,
  },
];

export default function Porjects() {
  return (
    <div className="w-full py-20">
      <div className="container flex flex-col gap-8 px-4 md:px-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            NOS PROJETS
          </h1>
          <p className="text-base opacity-80 leading-relaxed pt-2 max-w-3xl">
            Découvrez les projets passionnants que nous soutenons et promouvons
            pour stimuler le développement économique, culturel et social au
            sein de la communauté noire.
          </p>
        </div>
        <div className="pt-4 space-y-16 md:space-y-20">
          {projects.map((project, i) => (
            <div className="grid gap-8 md:grid-cols-2">
              <div
                className={cn("flex flex-col gap-4 justify-center", {
                  "order-last md:order-first": (i + 1) % 2 === 0,
                })}
              >
                <h2 className="text-2xl font-bold tracking-tight">
                  {project.name}
                </h2>
                {project.building ? (
                  <Badge variant="secondary" className="w-fit bg-blue-500/80">
                    Project en cours
                  </Badge>
                ) : (
                  <Badge variant="secondary" className="w-fit bg-green-500/80">
                    Projets Réalisés
                  </Badge>
                )}
                <p className="text-sm opacity-80 leading-relaxed pt-2">
                  {project.description}
                </p>
                {project.donation ? (
                  <Button className="w-fit rounded-2xl p-6">
                    Faire un don
                    <ArrowRightIcon className="ml-2 w-6 h-6 text-white"/>
                  </Button>
                ) : null}
              </div>
              <img
                alt="Project Showcase"
                className="aspect-video h-80 md:h-96 overflow-hidden rounded-xl object-cover object-center order-first"
                height="450"
                src={project.image}
                width="800"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
