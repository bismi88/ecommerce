import React from 'react'

const Footer = () => {
  return (
    <>
      <div className=" relative flex justify-centre gap-60 border border-gray-300 bg-pink-50 h-screen items-center">
       
    <h2 className="font-serif ml-4"><strong>BLINGG</strong><br />JEWELRY STORE</h2>
    
    <div className="flex gap-50">
      <div className="gap-40" >
      <h2 className="font-serif text-2xl"><strong>About us</strong></h2>
      <ul className="mt-4">
       <li><a href="#" className="hover:text-black">Home</a></li>
            <li><a href="#" className="hover:text-black">About</a></li>
            <li><a href="#" className="hover:text-black">Contact</a></li>
      </ul>
</div>
<div className="gap-40">
       <h2 className="font-serif text-2xl"><strong>Shop</strong></h2>
<ul className="mt-4">
         <li><a href="#" className="hover:text-black">Rings</a></li>
            <li><a href="#" className="hover:text-black">Bracelets</a></li>
            <li><a href="#" className="hover:text-black">Earrings</a></li>
            <li><a href="#" className="hover:text-black">Necklaces</a></li>
      </ul>
</div>
<div className=" gap-40">
       <h2 className="font-serif text-2xl"><strong>Address</strong></h2>
       <ul className="mt-4">
        <li>123 Fifth Avenue, New York,</li>
        <li>NY 10160</li>
        <li>929-242-6868</li>
        <li>contact@info.com</li>

        
</ul>
    </div>
    </div>
     </div>
    <div className=" absolute border-t bg-pink-50 text-center w-screen">
      <p>Copyright © 2025 Blingg Jewelry | Powered by Blingg Jewelry</p>
    </div>
    </>
  )
}

export default Footer