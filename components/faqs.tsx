import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const Faqs = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
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
              Qu'est-ce que IZI ACCESS ?
            </AccordionTrigger>
            <AccordionContent>
              IZI ACCESS est une organisation incubatrice qui encourage
              l'innovation, l'entrepreneuriat, la culture et le développement
              économique au sein de la communauté noire. Nos programmes et
              services sont conçus pour soutenir les individus et les
              entreprises dans leur parcours vers le succès.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-semibold text-gray-600 text-left">
              Qui peut bénéficier des services de IZI ACCESS ?
            </AccordionTrigger>
            <AccordionContent>
              Nos services sont ouverts à tous les membres de la communauté
              noire, qu'ils soient entrepreneurs, artistes, professionnels ou
              simplement intéressés par le développement personnel et
              professionnel.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-semibold text-gray-600 text-left">
              Comment puis-je m'inscrire en tant que membre de la IZI ACCESS ?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Pour vous inscrire en tant que membre, vous devez suivre les
                deux(2) etapes d’adhesion:{" "}
              </p>
              <p>
                {" "}
                -Faire la demande d’adhesion etpayez les frais{" "}
                <Link href="/membership" className="underline">
                  (Devenir Membre)
                </Link>
              </p>
              <p>
                -Ouvrir son compte “Fonds Commun” pour avoir acces a tous nos
                services subventionnes
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-semibold text-gray-600 text-left">
              Quels types de soutien financier offrez-vous aux entrepreneurs et
              aux entreprises ?
            </AccordionTrigger>
            <AccordionContent>
              Nous offrons une variété de solutions de financement, y compris
              des subventions, des prêts et des investissements en capital, pour
              soutenir les projets et les entreprises à fort potentiel de
              croissance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl font-semibold text-gray-600 text-left">
              Comment puis-je devenir partenaire de IZI ACCESS ?
            </AccordionTrigger>
            <AccordionContent>
              Si vous êtes intéressé à devenir partenaire de IZI Access,
              veuillez nous contacter pour discuter des possibilités de
              collaboration et des avantages mutuels a{" "}
              <a href="mailto:partenariat@iziaccess.org" className="underline">
                partenariat@iziaccess.org
              </a>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-xl font-semibold text-gray-600 text-left">
              Comment puis-je soutenir les initiatives de IZI Access en tant que
              donateur ou bénévole ?
            </AccordionTrigger>
            <AccordionContent>
              Nous accueillons avec gratitude les dons et le soutien des membres
              de la communauté. Pour faire un don, cliquez sur Faire un Don ou
              pour vous impliquer en tant que bénévole, veuillez nous contacter
              a l’adresse email suivante:{" "}
              <a href="mailto:contact@iziaccess.org" className="underline">
                contact@iziaccess.org
              </a>{" "}
              pour obtenir des informations sur les différentes façons de
              contribuer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-xl font-semibold text-gray-600 text-left">
              Comment puis-je rester informé des événements et des initiatives
              de IZI Access ?
            </AccordionTrigger>
            <AccordionContent>
              Pour rester informé des dernières nouvelles, événements et
              initiatives de IZI Access, veuillez vous abonner à notre
              newsletter et nous suivre sur les réseaux sociaux.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faqs;
