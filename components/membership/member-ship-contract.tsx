import { ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { toast } from "../ui/use-toast";

interface Props {
  handleChangeSection: (section: string) => void;
  email: string | null;
}

const MemberShipContract = ({ handleChangeSection, email }: Props) => {
  const [accept, setAccept] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (accept) {
      try {
        if (!email) {
          toast({
            title: "You should provide save personal info first",
            variant: "destructive",
          });
          return;
        }
        setLoading(true);

        const response = await fetch("/api/sanity/update-user", {
          method: "POST",
          body: JSON.stringify({ accept: true, email }),
        });
        if (response.ok) {
          handleChangeSection("membership");
        }
      } catch (e) {
        setLoading(false);
      }
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <article className="prose h-screen overflow-y-scroll">
        <h2>Termes et conditions</h2>
        <p>
          L'organisation Izi Access est guidée par une série de principes
          fondamentaux qui définissent notre mission, nos valeurs et nos
          engagements envers nos membres, nos partenaires et les communautés que
          nous servons. Cette charte vise à énoncer clairement ces principes et
          à fournir un cadre de référence pour nos activités et nos décisions.
        </p>

        <h2>Mission :</h2>
        <p>
          Notre mission est de favoriser l'innovation, l'entrepreneuriat, la
          culture et le développement économique au sein de la communauté noire
          au Canada et dans le monde entier. Nous nous engageons à créer des
          opportunités d'épanouissement personnel et professionnel, tout en
          promouvant la diversité, l'inclusion et le renforcement des liens
          communautaires.
        </p>
        <h2>Valeurs :</h2>
        <div>
          <ul>
            <li>
              <strong>Diversité :</strong> Nous croyons en la valeur de la
              diversité et nous nous engageons à créer un environnement inclusif
              où chaque individu est respecté et valorisé.
            </li>
            <li>
              <strong>Intégrité :</strong> Nous agissons avec intégrité,
              transparence et honnêteté dans toutes nos interactions et nos
              décisions.
            </li>
            <li>
              <strong>Collaboration :</strong> Nous croyons au pouvoir de la
              collaboration et nous encourageons la coopération entre les
              membres, les partenaires et les communautés que nous servons.
            </li>
            <li>
              <strong>Innovation :</strong> Nous sommes ouverts au changement et
              à l'innovation, et nous cherchons constamment à trouver de
              nouvelles façons de répondre aux besoins de notre communauté.
            </li>
          </ul>
        </div>

        <h2>Engagements :</h2>
        <div>
          <ul>
            <li>
              <strong> Engagement envers la Communauté :</strong> Nous nous
              engageons à servir et à soutenir notre communauté en offrant des
              programmes et des services qui répondent à ses besoins et à ses
              aspirations.
            </li>
            <li>
              <strong>Engagement envers nos Membres :</strong> Nous nous
              engageons à offrir à nos membres des opportunités d'apprentissage,
              de croissance et de développement professionnel, ainsi qu'un
              soutien continu dans la réalisation de leurs objectifs.
            </li>
            <li>
              <strong>Engagement envers nos Partenaires :</strong> Nous nous
              engageons à établir des partenariats solides et durables avec des
              organisations qui partagent nos valeurs et notre vision, et à
              travailler ensemble pour atteindre nos objectifs communs.
            </li>
          </ul>
        </div>
        <h2>Responsabilités :</h2>
        <div>
          <ul>
            <li>
              <strong>Responsabilité Financière :</strong> Nous sommes
              responsables de la gestion responsable et transparente de nos
              ressources financières, en veillant à ce qu'elles soient utilisées
              de manière efficace et à ce que nos activités soient
              financièrement durables.
            </li>
            <li>
              <strong>Responsabilité Sociale :</strong> Nous sommes responsables
              de l'impact social de nos actions et de nos décisions, en veillant
              à ce qu'elles contribuent positivement au bien-être de notre
              communauté et à la réalisation de nos objectifs sociaux.
            </li>
          </ul>
        </div>
        <div>
          <p>
            En adhérant à cette charte, nous nous engageons à respecter les
            principes, les valeurs et les engagements de l'organisation Izi
            Access dans toutes nos actions et nos décisions. Nous sommes
            déterminés à œuvrer ensemble pour promouvoir le développement et le
            bien-être de notre communauté, et à créer un avenir meilleur pour
            tous.
          </p>
          <p>
            Cette charte énonce les principes fondamentaux qui guident
            l'organisation Izi Access dans l'accomplissement de sa mission et de
            ses objectifs. Elle fournit un cadre de référence pour nos activités
            et nos décisions, tout en soulignant notre engagement envers nos
            membres, nos partenaires et nos communautés.
          </p>
        </div>
      </article>
      <div className="items-top flex space-x-2 pb-6 py-10">
        <Checkbox
          id="terms1"
          checked={accept}
          onCheckedChange={(v) => setAccept(v.valueOf() as boolean)}
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accepter les termes et conditions
          </label>
          <p className="text-sm text-muted-foreground">
            Vous acceptez nos conditions d'utilisation et notre politique de
            confidentialité.
          </p>
        </div>
      </div>
      <div className="flex justify-end pb-4 pr-3 mt-4">
        <Button
          className="rounded-2xl w-full"
          disabled={!accept || loading}
          onClick={handleSubmit}
        >
          {loading ? (
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          ) : null}
          Soumettre
        </Button>
      </div>
    </div>
  );
};

export default MemberShipContract;
