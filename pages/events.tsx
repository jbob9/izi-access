import Skeleton from "@/components/Skeleton";
import EventsBentoLayout from "@/components/events/events-bento-layout";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
  },
];

const Events = () => {
  return (
    <div className="pt-20 md:pt-14 pb-28 max-w-5xl mx-2 md:mx-auto">
      <div className="pb-5">
        <h1 className="text-2xl md:text-3xl font-bold leading-7 text-gray-900">
          Evenements
        </h1>
        <p className="text-sm opacity-80 leading-relaxed pt-3 max-w-4xl">
          Bienvenue sur la page des événements de IZI Access ! Découvrez nos
          prochains événements, conférences, concerts, spectacles, ateliers et
          plus encore. Restez informé et participez à nos initiatives pour vous
          connecter, apprendre et grandir avec notre communauté.
        </p>

        <div className="flex justify-end pt-4">
          <Tabs defaultValue="next" className="w-full md:w-[400px]" dir="rtl">
            <TabsList>
              <TabsTrigger value="past">Evenements Passes</TabsTrigger>
              <TabsTrigger value="next">Prohains Evenements</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      <EventsBentoLayout items={items} />
    </div>
  );
};

export default Events;
