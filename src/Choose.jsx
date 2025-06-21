import { Truck, CreditCard, MapPinned, BadgePercent } from 'lucide-react';

export default function Choose() {
  return (
    <div className="text-center mt-8 px-4 pt-100 pb-25">
      <h6 className="text-xl font-medium pb-5">WHY CHOOSE US</h6>
      <h1 className="text-3xl font-bold my-2">We provide the best offers for your convenience</h1>
      <p className="text-gray-500 max-w-xl mx-auto pt-5 pb-8">
        We offer value-packed deals, safe payments, and reliable shipping — making your experience easy and secure.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10 text-left">
        <div className="flex flex-col items-center">
          <BadgePercent size={40} className="text-gray-700" />
          <h2 className="mt-4 font-bold text-md">BIG DISCOUNTS</h2>
          <p className="text-sm text-gray-500 text-center mt-2">
            Enjoy exclusive offers and discounted prices on premium products.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Truck size={40} className="text-gray-700" />
          <h2 className="mt-4 font-bold text-md">FREE SHIPPING</h2>
          <p className="text-sm text-gray-500 text-center mt-2">
            Get free shipping on all eligible orders with fast delivery.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <CreditCard size={40} className="text-gray-700" />
          <h2 className="mt-4 font-bold text-md">SECURE PAYMENTS</h2>
          <p className="text-sm text-gray-500 text-center mt-2">
            Your payments are encrypted and safe with multiple options.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <MapPinned size={40} className="text-gray-700" />
          <h2 className="mt-4 font-bold text-md">ORDER TRACKING</h2>
          <p className="text-sm text-gray-500 text-center mt-2">
            Easily track your order with real-time updates from checkout to delivery.
          </p>
        </div>
      </div>
    </div>
  );
}