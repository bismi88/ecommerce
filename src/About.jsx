import { Link } from "react-router-dom";

export default function About(){
  return(
    <>
<div className="about-content">
      
      <div className="about-image ">
      <img className="relative" src="	https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/hero.jpg"/>
       <div className="absolute top-50 text-xl text-white text-center left-[450px]">
        <h4>A Few Words</h4>
      <h1>ABOUT US</h1>
   </div>
    </div>
    </div>
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between px-6 md:px-20 py-16 bg-white h-screen">
      <div className="md:w-1/2 text-center md:text-left">
        <p className="text-sm text-gray-500 mb-2">Mattis velit eget</p>
        <h2 className="text-3xl font-serif font-medium mb-2">About the <br /> Founder</h2>
        <p className="text-md text-gray-700 mb-6">
         "My growth is firm, shaped by subtle force. I dwell in pain."
        </p>
        <hr className="w-16 border-gray-300 mb-6" />
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          "Let the pain be at the edge. The support from now on should reach its end. Let the pathway of change match determination. My growth is firm, shaped by subtle force. I dwell in pain. The final gate should not make trouble for the just. Every sincere question deserves a clear answer. Let us move forward from the edge.
        </p>
        <p className="text-sm text-gray-600">
For the path of change to grow strong, it must be rooted in purpose. My growth is firm, shaped by subtle force.
        </p>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/about-01.jpg"
          alt="Founder"
          className="rounded-md w-72 md:w-96 object-cover"
        />
      </div>
    </div>
    <div className=" h-screen">
      <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bg-03.jpg" />
    </div>
     <div className="bg-[white] text-gray-800 p-8 md:p-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
        
        
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-sm tracking-widest text-gray-500 mb-2">ABOUT US</h2>
          <h1 className="text-4xl font-serif leading-snug">How it all started</h1>
          <a className="" href="/rings">Rigns</a> <br />
          <Link to={'/rings'}>Rings</Link>
        </div>

       
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-serif mb-4">
            "Even the fiery struggles of the heart are tempered by time’s quiet force.
          </h2>
          <p className="text-gray-600 mb-8">
  Beauty lies in the heart of connection, where elegance meets purpose. Strength grows when challenge is met with intent. Even at the edge of possibility, rhythm finds its place.
          </p>

         
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold">1924 - <span className="italic">Established</span></h3>
              <p className="text-gray-600">
                Let resolve rise from humble beginnings, and let strength be born of burden. Even the quietest words can guide a gathering storm.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">1950 - <span className="italic">Vivamus Elementum</span></h3>
              <p className="text-gray-600">
                In the grand design of fate and struggle, mountains may tremble—yet only the humble emerge. Let resolve be nourished by mindful presence, and strength blossom before the first step is taken.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">1975 - <span className="italic">Magnis Parturient</span></h3>
              <p className="text-gray-600">
                Let bold intention rise with graceful rhythm. When pressure mounts, let resolve take shape. Even amidst burden, move with quiet purpose toward the light.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">2010 - <span className="italic">Interdum Mauris</span></h3>
              <p className="text-gray-600">
                Though mountains may labor to give birth, only a laughable mouse may emerge. So let us drink deeply of presence, building strength with each step before the journey begins.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
    
    {/* <div className=" relative flex justify-centre gap-60 border border-gray-300 bg-pink-50 h-screen items-center">
       
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
    </div> */}
   
    </>
  );
}
