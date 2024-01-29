import { cn } from "@/lib/utils";
import Link from "next/link";

const BlogCard = ({ withMinWidth = true }) => {
  return (
    <Link href={'/blog/ejeueueueu'} className={cn('group', {
      'min-w-80 md:min-w-[26rem]': withMinWidth
    })}>
      <img
        src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        alt="art cover"
        loading="lazy"
        width="1000"
        height="667"
        className="h-60 md:h-80 w-full rounded-3xl object-cover"
      />
      <h3 className="text-lg md:text-2xl font-semibold text-gray-800 my-4 ">
        Flipper and JS: why we added JavaScript support to a mobil...
      </h3>
      <p className="text-gray-600 text-sm">
        Finding the right open source project for your first contribution can
        feel daunting....
      </p>
      <div className="flex gap-6 justify-between items-end mt-2">
        <a
          href="#"
          className="-ml-1 p-1 rounded-full flex items-center gap-3 hover:bg-gray-50"
        >
          <img
            className="w-10 h-10 object-cover rounded-full"
            src="https://tailus.io/sources/blocks/twocolumns/preview/images/man.jpg"
            alt=""
          />
          <div className="flex flex-col space-y-1">
            <span className="font-semibold text-sm text-gray-600 ">
              Bernard Ng.
            </span>
            <span className="text-xs">CTO of IziAccess</span>
          </div>
        </a>
        <span className="w-max block font-semibold text-sm text-gray-500 sm:mt-0">
          Aug 27 2022
        </span>
      
      </div>
    </Link>
  );
};

export default BlogCard;
