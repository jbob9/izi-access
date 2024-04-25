import { cn } from "@/lib/utils";
import EventCard from "./event-card";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

const EventsBentoLayout = ({
  items,
}: {
  items: {
    title: string;
    description: string;
    // header: React.JSX.Element;
  }[];
}) => {
  return (
    <BentoGrid>
      {items.map((item, i) => (
        <EventCard
          key={i}
          title={item.title}
          description={item.description}
          // header={item.header}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
};

export default EventsBentoLayout;
