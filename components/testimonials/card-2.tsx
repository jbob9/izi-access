import { StarFilledIcon } from "@radix-ui/react-icons";
import React from "react";

const Card2 = () => {
  return (
    <div className="aspect-auto py-6 px-6 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none min-w-80 max-w-[22rem]">
      <div className="flex items-center gap-2">
        <StarFilledIcon className="text-yellow-400 w-5 h-5" />
        <StarFilledIcon className="text-yellow-400 w-5 h-5" />
        <StarFilledIcon className="text-yellow-400 w-5 h-5" />
        <StarFilledIcon className="text-yellow-400 w-5 h-5" />
        <StarFilledIcon className="text-yellow-400 w-5 h-5" />
      </div>
      <p className="mt-4 text-neutral-600">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid
        quo eum quae quos illo earum ipsa doloribus nostrum minus libero
        aspernatur laborum cum."
      </p>
      <div className="mt-6 border-t pt-4">
        <h6 className="font-bold text-neutral-900">Eric Ampire</h6>
        <p className="text-sm text-neutral-500 pt-1">Mobile dev</p>
      </div>
    </div>
  );
};

export default Card2;
