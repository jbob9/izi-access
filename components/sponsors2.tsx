import React from "react"

// https://tailus.io/sources/blocks/company-site/preview/
const  Sponsors2 = () => {
  return (
    <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
      <div className="m-auto text-center md:w-8/12 lg:w-6/12">
        <h2 className="text-2xl font-bold text-gray-800 md:text-4xl">
            Our heroes <span className="text-primary">contribute</span> to the development of <span className="text-main">IZiAccess</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          <div className="p-4">
              <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-8.png" className="w-32" alt=""/>
          </div>
          <div className="p-4">
              <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-8.png" className="w-32 " alt=""/>
          </div>
          <div className="p-4">
              <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-3.png" className="w-32 " alt=""/>
          </div>
          <div className="p-4">
              <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-1.png" className="w-32 " alt=""/>
          </div>
          <div className="p-4">
              <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/tailus.svg" className="w-32" alt=""/>
          </div>
          <div className="p-4">
              <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/microsoft.svg" className="w-32" alt=""/>
          </div>
          <div className="p-4">
              <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/coty.svg" className="w-20" alt=""/>
          </div>
          <div className="p-4">
              <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-4.png" className="w-24" alt=""/>
          </div>
      </div>
    </div>                              
                                      
  )
}

export default Sponsors2
