import { GetServerSidePropsContext } from 'next'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {}
  };
}

const Blog = () => {
  return (
    <div className='max-w-2xl container mx-auto pt-20 md:pt-14 pb-20 px-4'>
      {/* <h2 className="font-bold text-3xl pb-12 text-gray-800 dark:text-white">First blog</h2> */}
      <article className="prose lg:prose-xl">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic bread with cheese to their
          children, with the food earning such an iconic status in our culture that kids will often dress
          up as warm, cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
          springing up around the country.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit enim excepturi id error maxime necessitatibus laudantium, quae voluptates quaerat, nulla officiis eaque ipsam alias labore hic odit quisquam dignissimos? Ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cupiditate quia possimus repellat hic vel illo consequuntur. Suscipit itaque voluptas iste dolorem saepe debitis! Dolor quia reprehenderit esse eum eaque?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eligendi libero tempora, vel reprehenderit cupiditate debitis quae obcaecati officia nostrum nemo consequatur sit, cumque est quasi, nesciunt ullam. Voluptatibus, natus.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum minus facilis, incidunt iure veritatis possimus magnam illum odit ex quos cumque ea molestiae? Corporis amet alias obcaecati impedit vel, quibusdam aperiam deleniti ut magnam? Corporis, nemo sit, placeat doloribus, itaque illo quos iste quaerat hic similique totam. Itaque quaerat quae iste saepe ad? Inventore quam est vel, quis magni consectetur necessitatibus quod magnam alias quia dignissimos placeat molestiae officia eos cum itaque ullam provident perferendis. Eligendi nisi expedita laboriosam sunt quibusdam ipsam autem quod quisquam fuga ea omnis quia facilis beatae quos, perspiciatis cum iure velit veniam debitis! Repudiandae possimus quod enim repellendus doloribus eligendi ex incidunt deleniti vero mollitia sint blanditiis, fugiat, est, atque totam ratione? At sint aspernatur fugit repudiandae a consequuntur accusantium dignissimos debitis error itaqu doloribus obcaecati quis facere nulla! Alias enim tenetur voluptatum commodi dolorem labore non ducimus esse.
        </p>
      </article>
    </div>
  )
}

export default Blog