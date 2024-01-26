import React from 'react'
import Carousel from '../carousel'

const Testimonials = () => {
  return (
    

<div className="py-16">
 <div className="xl:container m-auto px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
   <h2 className="mb-12 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
     What's our customers say
   </h2>
   <div className='max-w-3xl mx-auto'>
   <Carousel withArrows>
    <div className="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12 embla__slide bg-indigo-100 rounded-3xl">
            <img
              className="mx-auto !h-16 !w-16 rounded-full"
              src="images/avatars/second_user.webp"
              alt="user avatar"
              height="220"
              width="220"
              loading="lazy"
            />
            <p>
              <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto
              aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis
              cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span>
            </p>
            <div>
              <h6 className="text-lg font-semibold leading-none">John Doe</h6>
              <span className="text-xs text-gray-500">Product Designer</span>
            </div>
            <img
              className="mx-auto !w-28"
              src="images/clients/client-4.png"
              alt="company logo"
              height="400"
              width="142"
              loading="lazy"
            />
          </div>
          <div className="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12 embla__slide">
            <img
              className="mx-auto !h-16 !w-16 rounded-full"
              src="images/avatars/second_user.webp"
              alt="user avatar"
              height="220"
              width="220"
              loading="lazy"
            />
            <p>
              <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto
              aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis
              cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span>
            </p>
            <div>
              <h6 className="text-lg font-semibold leading-none">John Doe</h6>
              <span className="text-xs text-gray-500">Product Designer</span>
            </div>
            <img
              className="mx-auto !w-28"
              src="images/clients/client-4.png"
              alt="company logo"
              height="400"
              width="142"
              loading="lazy"
            />
          </div>
   </Carousel>
   </div>
   {/* <div className="swiper mySwiper">
     <div className="swiper-wrapper pb-6">
       <div className="swiper-slide !bg-transparent">
         <div className="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12">
           <img
             className="mx-auto !h-16 !w-16 rounded-full"
             src="images/avatars/second_user.webp"
             alt="user avatar"
             height="220"
             width="220"
             loading="lazy"
           />
           <p>
             <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto
             aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis
             cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span>
           </p>
           <div>
             <h6 className="text-lg font-semibold leading-none">John Doe</h6>
             <span className="text-xs text-gray-500">Product Designer</span>
           </div>
           <img
             className="mx-auto !w-28"
             src="images/clients/client-4.png"
             alt="company logo"
             height="400"
             width="142"
             loading="lazy"
           />
         </div>
       </div>

       <div className="swiper-slide !bg-transparent">
         <div className="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12">
           <img
             className="mx-auto !h-16 !w-16 rounded-full"
             src="images/avatars/third_user.webp"
             alt="user avatar"
             height="220"
             width="220"
             loading="lazy"
           />
           <p>
             <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto
             aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis
             cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span>
           </p>
           <div>
             <h6 className="text-lg font-semibold leading-none">John Doe</h6>
             <span className="text-xs text-gray-500">Product Designer</span>
           </div>
           <img
             className="mx-auto !w-28"
             src="images/clients/client-3.png"
             alt="company logo"
             height="400"
             width="142"
             loading="lazy"
           />
         </div>
       </div>

       <div className="swiper-slide !bg-transparent">
         <div className="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12">
           <img
             className="mx-auto !h-16 !w-16 rounded-full"
             src="images/avatars/first_user.webp"
             alt="user avatar"
             height="220"
             width="220"
             loading="lazy"
           />
           <p>
             <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto
             aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis
             cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span>
           </p>
           <div>
             <h6 className="text-lg font-semibold leading-none">John Doe</h6>
             <span className="text-xs text-gray-500">Product Designer</span>
           </div>
           <img
             className="mx-auto !w-28"
             src="images/clients/client-8.png"
             alt="company logo"
             height="400"
             width="142"
             loading="lazy"
           />
         </div>
       </div>
     </div>

     <div className="swiper-pagination"></div>
   </div> */}
 </div>
</div>
                                   
  )
}

export default Testimonials