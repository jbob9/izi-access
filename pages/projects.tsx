import { Button } from "@/components/ui/button";

export default function Porjects() {
  return (
    <div className="w-full py-20">
      <div className="container flex flex-col gap-8 px-4 md:px-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Project Showcase
          </h1>
          <p className="max-w-prose text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Highlighting some of our favorite projects.
          </p>
        </div>
        <div className="pt-4">
          <div className="grid gap-8 md:grid-cols-2 pb-16 md:pb-24">
            <div className="flex flex-col gap-4 justify-center">
              <h2 className="text-2xl font-bold tracking-tight">
                Next.js Marketing Site
              </h2>
              <p className="max-w-prose text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                A beautifully designed marketing site built with Next.js,
                Tailwind CSS, and deployed with Vercel.
              </p>
              <Button className="w-fit rounded-2xl p-6">
                Obtenir une demonstration
              </Button>
            </div>
            <img
              alt="Project Showcase"
              className="aspect-video h-80 md:h-96 overflow-hidden rounded-xl object-cover object-center order-first"
              height="450"
              src="/slide-1.jpg"
              width="800"
            />
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-4 justify-center order-last md:order-first">
              <h2 className="text-2xl font-bold tracking-tight">
                Shadcn Component Library
              </h2>
              <p className="max-w-prose text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                A stunning component library built with Tailwind CSS and React.
                It includes beautifully designed components t web app.
              </p>
              <Button className="w-fit rounded-2xl p-6">
                Obtenir une demonstration
              </Button>
            </div>
            <img
              alt="Project Showcase"
              className="aspect-video h-80 md:h-96 overflow-hidden rounded-2xl object-cover object-center"
              height="550"
              src="/slide-3.jpg"
              width="800"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
