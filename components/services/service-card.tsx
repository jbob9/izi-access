import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRightIcon } from "@sanity/icons";
import Link from "next/link";

interface Props {
  image: string;
  title: string;
  link: string;
  description?: string;
}
const ServiceCard = ({ image, title, link, description }: Props) => {
  return (
    <Card className="rounded-2xl group">
      <Link href={link}>
        <CardContent className="p-0">
          <div className="h-[16rem] rounded-t-2xl overflow-hidden">
            <img
              src={image}
              className="object-cover rounded-t-2xl group-hover:scale-105 transition duration-300"
              width={900}
              height={400}
              alt=""
            />
          </div>
        </CardContent>
        <CardFooter className="pt-0 md:pt-6 pb-6 pl-5 flex flex-col space-y-3">
          <div className=" flex items-center w-full">
            <div className="text-2xl leading-tight mr-3">{title}</div>
            <ArrowRightIcon className="w-7 h-7" stroke="2" />
          </div>
          <p className="text-sm opacity-80 leading-relaxed">
            {description}
          </p>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ServiceCard;
