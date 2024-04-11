import AboutHero from "@/components/aboutHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRightIcon } from "@sanity/icons";
import Link from "next/link";

const groups = [
  {
    name: "Équipe Canadienne",
    team: [
      {
        name: "Fredjy LOUIS",
        role: "PDG",
        imageUrl: null,
      },
      {
        name: "Roosvelt BAPTISTIN",
        role: "Vice-President du CA",
      },
      {
        name: "Marie Rebecca GUILLAUME",
        role: "Secretaire du CA",
      },
      {
        name: "Frederika MORISSET",
        role: "Adm du CA",
      },
      {
        name: "Marie Danielle ST VIL",
        role: "Secretaire Generale",
      },
      {
        name: "Jesula BLANC",
        role: "Directrice des Operations",
      },
      {
        name: "Enock Junior",
        role: "Photographe",
      },
    ],
  },
  {
    name: "Équipe d'Haïti",
    team: [
      {
        name: "Kerven CANTAVE",
        role: "Directeur General",
      },
      {
        name: "Evodie Gibbs",
        role: "Directrice des Operations",
      },
      {
        name: "Fritz Ricardo DORLEANS",
        role: "Directeur Adj. des Operations",
      },
      {
        name: "Rebecca ANDRE",
        role: "Directrice des Programmes",
      },
      {
        name: "Emmanuel W. FRANCOIS",
        role: "Comptable",
      },
      {
        name: "Dalton C. DUMEUS",
        role: "Resp. Communication",
      },
      {
        name: "Berlensky Jn Baptiste O.",
        role: "Directeur des Programmations",
      },
      {
        name: "Clarens JEUNE",
        role: "Marketer",
      },
    ],
  },
];

const About = () => {
  return (
    <div className="pt-20 md:pt-16 px-4 pb-24">
      <div className="pb-20">
        <AboutHero />
      </div>
      <div className="bg-white pb-20 pt-10 border-b border-t">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-16 px-2 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Notre Équipe
            </h2>
            <p className="mt-3 md:mt-6 text-base md:text-lg leading-8 text-gray-600">
              Rencontrez les membres dévoués de notre équipe qui travaillent
              sans relâche pour réaliser notre mission et nos objectifs
            </p>
          </div>
          {groups.map((group) => (
            <div>
              <h2 className="text-2xl pb-4 font-bold leading-7 text-gray-900">
                {group.name}
              </h2>
              <div
                role="list"
                className="grid gap-x-8 gap-y-8 sm:grid-cols-2 xl:col-span-2"
              >
                {group.team.map((person) => (
                  <Card key={person.name}>
                    <CardContent className="px-5 py-3">
                      <div className="flex items-center gap-x-6">
                        {/* <img
                      className="h-16 w-16 rounded-full"
                      src={person.imageUrl}
                      alt=""
                    /> */}
                        <div>
                          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                            {person.name}
                          </h3>
                          <p className="text-sm font-semibold leading-6 text-indigo-600">
                            {person.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About foooter */}
      <div className="px-6 mt-8">
        <div className="flex flex-col md:flex-row space-y-8 flex-1 justify-between items-center">
          <div className="flex justify-center items-stretch">
            <p className="tracking-tight max-w-[16ch] font-extrabold leading-[1.1em] text-[3.5rem]">
              Rejoignez notre communaute
            </p>
          </div>
          <div className="closing_closing-buttons__YSVNC">
            <div className="flex-grow-0 flex-shrink-0 justify-start items-stretch">
              <div className="flex-1 justify-start items-stretch">
                <Button className="rounded-3xl h-12 bg-neutral-950">
                  <Link href="/membership" className="flex items-center">
                    <span>Become a member</span>
                    <ArrowRightIcon className="w-6 h-6 text-white ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
