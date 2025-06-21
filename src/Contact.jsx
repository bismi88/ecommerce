export default function Contact(){
  return(
    <>
    <div className="about-content items-center place-items-center w-screen  ">
      
    
    <div className="about-image  ">
      <img className="relative " src="	 https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/hero.jpg"/>
  
   
    <div className="absolute top-50 text-center left-[450px] font-serif text-white text-xl bottom-20 ">
        <h4 >Get in touch</h4>
        <h1 className=" touch  pt-25 text-6xl font-extralight">CONTACT US</h1>
        </div>
</div>
</div>
    <div className="flex flex-col md:flex-row justify-between items-start p-10 bg-white">
    
      <div className="w-full md:w-1/2 mb-8 md:mb-0 pl-20 pt-20 font-serif font-extralight text-xl">
        <h2 className="text-3xl pb-10 mb-4 text-blac pl-12 font-light">MESSAGE US</h2>
        <p className="mb-4 text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo
          tempor, congue justo at, lobortis orci.
        </p>
        <p className="mb-2 text-black">📍 123 Fifth Avenue, New York, NY 10160</p>
        <p className="mb-2 text-black">✉️ contact@info.com</p>
        <p className="mb-2 text-black">📞 9-334-7565-9787</p>
      </div>
      <div className="w-full md:w-[40%] bg-[#f5e6e8] p-6 ">
        <form className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First name"
              className="w-1/2 p-2 border to-black text-black"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-1/2 p-2 border to-black text-black"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 border to-black text-black"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-2 border to-black  text-black"
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2  bg-white text-black border to-black "
          >
            SEND
          </button>
        </form>
      </div>
      
    </div>
    <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15791.82042602436!2d77.20933304500015!3d8.307260367647315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b045516f27e1797%3A0x9eaf4bffb1fa19c1!2sMarthandam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1750315289100!5m2!1sen!2sin" width="1500" height="450"  loading="lazy "></iframe>
      </div>
      </>
      );
      }