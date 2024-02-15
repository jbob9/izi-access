import React from "react";

const Card2 = () => {
  return (
    <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none min-w-80 max-w-80">
      <div className="flex gap-4">
        <img
          className="w-12 h-12 rounded-full"
          src="https://pbs.twimg.com/profile_images/1559671811780087810/Y4E8X2do_400x400.jpg"
          alt=""
          width=""
          height=""
          loading="lazy"
        />
        <div>
          <h6 className="text-lg font-medium text-gray-700 dark:text-white">
            Eric Ampire
          </h6>
          <p className="text-sm text-gray-500 dark:text-gray-400">Mobile dev</p>
        </div>
      </div>
      <p className="mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid
        quo eum quae quos illo earum ipsa doloribus nostrum minus libero
        aspernatur laborum cum.
      </p>
    </div>
  );
};

export default Card2;
