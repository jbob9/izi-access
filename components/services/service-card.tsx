import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRightIcon } from "@sanity/icons";

const ServiceCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <Card className="rounded-2xl group">
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
      <CardFooter className="p-0">
        <div className="pt-0 md:pt-6 pb-6 pl-5 flex items-center w-full">
          <div className="text-2xl leading-tight mr-3">{title}</div>
          <ArrowRightIcon className="w-7 h-7" stroke="2" />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
