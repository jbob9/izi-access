import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const PoEliteFaqs = () => {
  return (
    <div className="max-w-[86rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-semibold md:text-4xl md:leading-tight dark:text-white">
          Vos questions, réponses
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          Réponses aux questions les plus fréquemment posées.
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold text-gray-600 text-left">
              Qu'est-ce que le Programme Elite?
            </AccordionTrigger>
            <AccordionContent>
              Le Programme Elite est une initiative dynamique visant à faciliter
              les échanges et les collaborations entre la communauté noire à
              travers le monde et sa diaspora au Canada. Nous mettons en avant
              les talents, les compétences et les réalisations exceptionnelles
              des professionnels, des artistes et des entrepreneurs de la
              communauté noire, offrant ainsi une plateforme d'opportunités et
              de partage pour le développement professionnel, culturel et
              économique.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-semibold text-gray-600 text-left">
              Qui peut participer au Programme Elite?
            </AccordionTrigger>
            <AccordionContent>
              Le Programme Elite est ouvert à tous les professionnels, artistes
              et entrepreneurs de la communauté noire à travers le monde, ainsi
              qu'à ceux qui souhaitent se connecter et collaborer avec la
              diaspora noire au Canada. Neanmoins, il faut obligatoirement:
              <p>
                -ETRE MEMBRE DE LA IZI ACCESS{" "}
                <Link href="/membership" className="underline">
                  (Devenir Membre)
                </Link>
              </p>{" "}
              <p>
                -POSSEDER UN PASSEPORT VALIDE (Si vous ne residez pas au
                Canada).
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-semibold text-gray-600 text-left">
              Quels types d'événements proposez-vous?
            </AccordionTrigger>
            <AccordionContent>
              Nous proposons une variété d'événements stimulants, notamment des
              conférences, des concerts, des spectacles artistiques, des
              formations professionnelles, et bien plus encore. Ces événements
              offrent aux participants une occasion unique de partager leurs
              connaissances, d'élargir leur réseau et de découvrir de nouvelles
              opportunités de croissance et d'épanouissement. (Plus
              d’informations, allez a la section Premiere Edition au Canada)
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-semibold text-gray-600 text-left">
              Quels types d'événements proposez-vous?
            </AccordionTrigger>
            <AccordionContent>
              Nous proposons une variété d'événements stimulants, notamment des
              conférences, des concerts, des spectacles artistiques, des
              formations professionnelles, et bien plus encore. Ces événements
              offrent aux participants une occasion unique de partager leurs
              connaissances, d'élargir leur réseau et de découvrir de nouvelles
              opportunités de croissance et d'épanouissement. (Plus
              d’informations, allez a la section Premiere Edition au Canada)
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl font-semibold text-gray-600 text-left">
              Comment puis-je m'inscrire aux événements du Programme Elite?
            </AccordionTrigger>
            <AccordionContent>
              Les inscriptions aux événements du Programme Elite se font
              généralement en ligne via notre site web. Remplissez le formulaire
              d’application{" "}
              <Link href="/po-elite/form" className="underline">
                (Apply Now)
              </Link>
              ;
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-xl font-semibold text-gray-600 text-left">
              Y a-t-il des frais pour participer au Programme Elite?
            </AccordionTrigger>
            <AccordionContent>
              Les événements du Programme Elite sont payants, mais certains
              peuvent etre gratuits. Si vous voulez participer, des frais
              d'inscription ou de participation de 150 dollars US peuvent etre
              appliques. Ces frais varient en fonction de la categorie
              d'événement.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-xl font-semibold text-gray-600 text-left">
              Comment puis-je contacter l'équipe du Programme Elite?
            </AccordionTrigger>
            <AccordionContent>
              Si vous avez des questions ou des préoccupations, vous pouvez nous
              contacter en utilisant le formulaire de contact sur notre site web
              ou en nous envoyant un e-mail à{" "}
              <a
                href="mailto:programmeelite@iziaccess.org"
                className="underline"
              >
                programmeelite@iziaccess.org
              </a>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default PoEliteFaqs;
