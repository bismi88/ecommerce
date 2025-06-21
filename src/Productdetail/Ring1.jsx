import React, { useState } from 'react';

const ProductDetail = () => {
  const productImages = [
    "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-01-a.jpg",
    "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-01-b.jpg",
    "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-01-c.jpg",
    "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-d.jpg"
  ];
  
const [mainImage, setMainImage] = useState(productImages[0]);

  return (
    <div className="flex flex-col md:flex-row p-8 gap-4.5  ">
      
      <div className="flex md:flex-col gap-10">
        {productImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            onClick={() => setMainImage(img)}
             className="w-32 h-32 object-cover cursor-pointer border hover:border-blue-500"
          />
        ))}
      </div>

      
      <div className="flex-1">
        <img src={mainImage} alt="Main Product" className="w-full max-w-lg mx-auto" />
      </div>


      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-semibold">Product Name 19</h1>
        <p className="text-lg font-semibold text-gray-800">$1,500.00 <span className="text-sm text-green-600">& Free Shipping</span></p>
        <p className="text-gray-600">
          This ring has a beautiful design with high-quality stones and elegant finishing. Suitable for both special occasions and daily wear.
        </p>

        <div className="flex items-center gap-2">
          <label htmlFor="quantity" className="text-gray-700">Quantity:</label>
          <input id="quantity" type="number" defaultValue={1} className="w-16 px-2 py-1 border rounded" />
        </div>

        <div className="flex gap-2">
          <button className="bg-black text-white px-4 py-2 rounded">Add to Cart</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Buy Now</button>
          <button className="border px-4 py-2 rounded">Customize</button>
        </div>

        <p className="text-gray-600">Category: Rings</p>
      </div>
    </div>
  );
};

export default ProductDetail;
  
    