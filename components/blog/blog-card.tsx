import { cn } from "@/lib/utils";
import { Blog } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  article: Blog;
  withMinWidth?: boolean;
}

const BlogCard = ({ withMinWidth = true, article }: Props) => {
  return (
    <Card>
      <CardContent className="p-3">
        <div
          className={cn("group", {
            "min-w-72 md:min-w-[26rem]": withMinWidth,
          })}
        >
          <Link href={`/blog/${article.slug}`}>
            <Image
              src={article.image}
              alt="article cover"
              width="800"
              height="367"
              className="h-56 w-full rounded-2xl object-cover bg-gray-100"
            />
          </Link>
          <Link href={`/blog/${article.slug}`} className="my-4 block">
            <h3 className="text-lg md:text-2xl font-semibold text-gray-700 mb-2 ">
              {article.title}
            </h3>
            <p className="text-gray-600 text-sm">{article.description}</p>
          </Link>

          <div className="flex gap-6 justify-between items-end mt-2">
            <div className="-ml-1 p-1 rounded-full flex items-center gap-3 hover:bg-gray-50">
              <Image
                className="w-10 h-10 object-cover rounded-full bg-gray-100"
                src={article.author.avatar}
                width={40}
                height={40}
                alt="author avatar"
              />
              <div className="flex flex-col space-y-1">
                <span className="font-semibold text-sm text-gray-600 ">
                  {article.author.name}
                </span>
                <span className="text-xs">{article.author.activity}</span>
              </div>
            </div>
            <span className="w-max block font-semibold text-sm text-gray-500 sm:mt-0">
              {dayjs(article._createdAt).format("MMM DD YYYY")}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
