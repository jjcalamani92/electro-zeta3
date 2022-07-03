export const Feature = () => {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 gap-y-0">
            <div className="col-span-1">
              <h1 className="text-4xl font-semibold leading-9 text-gray-800">Nuestras Promociones</h1>
              <p className="text-xs md:text-sm leading-6 mt-4 text-gray-600">Hazte con la ropa que quieres desde hace tiempo con las rebajas para hombre de ASOS. Desde zapatos hasta camisas, nuestras rebajas tienen los mejores looks para todo el año. No importa cuál sea tu estilo, en las rebajas de ropa de hombre de ASOS encontrarás lo que buscas. Completa tu look con nuestras rebajas de zapatos para hombre, con marcas como Nike y adidas Originals. </p>
              <button aria-label="view catalogue" className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none my-6 md:mt-8 text-base font-semibold leading-none text-gray-800 flex items-center hover:underline">
                Ver Categorias
                <svg className="ml-2 mt-1" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.33325 4H10.6666" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 6.66667L10.6667 4" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 1.33398L10.6667 4.00065" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="col-span-2">
              <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6">
                <img src="https://res.cloudinary.com/dvcyhn0lj/image/upload/v1654481943/piccoletti/featured/1473819-00-A_alt_wpgkdb.jpg" className="w-full" alt="kitchen" />
                <img src="https://res.cloudinary.com/dvcyhn0lj/image/upload/v1654481935/piccoletti/featured/1473814-00-A_alt_decfpw.jpg" className="w-full" alt="sitting room" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}