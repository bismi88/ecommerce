import React from 'react'

const Rings = () => {
  return (
   <>
   <div className="px-10 py-8">
      <h2 className="text-sm text-gray-500 mb-2">Home / Rings</h2>
      <h1 className="text-5xl font-serif mb-4">RINGS</h1>
      <p className="text-gray-500 mb-6">Showing all 6 results</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="overflow-hidden">
            <img
              src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-01-b-300x375.jpg"
              alt="Product Name 19"
              className="mx-auto transition-transform duration-300 transform hover:scale-110 "
            />
          </div>
          <h3 className="mt-4 text-lg font-serif">Product Name 19</h3>
          <p className="text-gray-600">$1,500.00</p>
        </div>
        <div className="text-center">
          <div className="overflow-hidden">
            <img
              src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-02-c-300x375.jpg"
              alt="Product Name 20"
              className="mx-auto transition-transform duration-300 transform hover:scale-110"
            />
          </div>
          <h3 className="mt-4 text-lg font-serif">Product Name 20</h3>
          <p className="text-gray-600">$2,200.00</p>
        </div>
        <div className="text-center">
          <div className="overflow-hidden">
            <img
              src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-03-b-240x300.jpg"
              alt="Product Name 21"
              className="mx-auto transition-transform duration-300 transform hover:scale-110 h-80px w-1.5xl"
            />
          </div>
          <h3 className="mt-4 text-lg font-serif">Product Name 21</h3>
          <p className="text-gray-600">$3,000.00</p>
        </div>
        <div className="text-center">
          <div className="overflow-hidden">
            <img
              src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-04-b-768x960.jpg"
              alt="Product Name 22"
              className="mx-auto transition-transform duration-300 transform hover:scale-110"
            />
          </div>
          <h3 className="mt-4 text-lg font-serif">Product Name 22</h3>
          <p className="text-gray-600">$950.00</p>
        </div>
        <div className="text-center">
          <div className="overflow-hidden">
            <img
              src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-05-c-240x300.jpg"
              alt="Product Name 23"
              className="mx-auto transition-transform duration-300 transform hover:scale-110"
            />
          </div>
          <h3 className="mt-4 text-lg font-serif">Product Name 23</h3>
          <p className="text-gray-600">$1,700.00</p>
        </div>
        <div className="text-center">
          <div className="overflow-hidden">
            <img
              src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-06-b-300x375.jpg"
              alt="Product Name 24"
              className="mx-auto transition-transform duration-300 transform hover:scale-110"
            />
          </div>
          <h3 className="mt-4 text-lg font-serif">Product Name 24</h3>
          <p className="text-gray-600">$900.00</p>
        </div>
      </div>
    </div>
   </>
  )
}

export default Rings