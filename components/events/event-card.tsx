import { CalendarIcon } from "@sanity/icons";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export const EventCard = ({
  className,
  title,
  description,
  header,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl hover:shadow-xl transition duration-200 shadow-input p-4 bg-white border border-neutral-200 justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div>
        <div className="flex items-center text-neutral-500 font-semibold text-xs space-x-1">
          <CalendarIcon className="w-5 h-5" />
          <span>Dec 12 2024, 16:30</span>
        </div>
        <div className="font-sans font-bold text-neutral-600 mb-2 mt-1">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs line-clamp-2">
          {description}
        </div>
        <Button className="mt-2 w-full">Request accesst</Button>
      </div>
    </div>
  );
};

export default EventCard
