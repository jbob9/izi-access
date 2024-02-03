const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },

  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

const Team = () => {
  return (
    <div>
      {/* Garlic bread with cheese: What the science tells us



For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for Halloween.

But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country.

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit enim excepturi id error maxime necessitatibus laudantium, quae voluptates quaerat, nulla officiis eaque ipsam alias labore hic odit quisquam dignissimos? Ipsum!



Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cupiditate quia possimus repellat hic vel illo consequuntur. Suscipit itaque voluptas iste dolorem saepe debitis! Dolor quia reprehenderit esse eum eaque?



Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eligendi libero tempora, vel reprehenderit cupiditate debitis quae obcaecati officia nostrum nemo consequatur sit, cumque est quasi, nesciunt ullam. Voluptatibus, natus.



Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum minus facilis, incidunt iure veritatis possimus magnam illum odit ex quos cumque ea molestiae? Corporis amet alias obcaecati impedit vel, quibusdam aperiam deleniti ut magnam? Corporis, nemo sit, placeat doloribus, itaque illo quos iste quaerat hic similique totam. Itaque quaerat quae iste saepe ad? Inventore quam est vel, quis magni consectetur necessitatibus quod magnam alias quia dignissimos placeat molestiae officia eos cum itaque ullam provident perferendis. Eligendi nisi expedita laboriosam sunt quibusdam ipsam autem quod quisquam fuga ea omnis quia facilis beatae quos, perspiciatis cum iure velit veniam debitis! Repudiandae possimus quod enim repellendus doloribus eligendi ex incidunt deleniti vero mollitia sint blanditiis, fugiat, est, atque totam ratione? At sint aspernatur fugit repudiandae a consequuntur accusantium dignissimos debitis error itaqu doloribus obcaecati quis facere nulla! Alias enim tenetur voluptatum commodi dolorem labore non ducimus esse. */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>   
    </div>
  );
};

export default Team;
