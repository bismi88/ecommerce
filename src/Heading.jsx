export default function Heading() {
  return (
    <div className="image pt-5 relative">
      <img
        className="w-full h-screen object-cover"
        src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/hero.jpg"/>
      <div className="english text-left pt-5 pl-15 absolute top-1/4 left-10 font-light max-w-2xl ">
        <h5 className="new pb-8 text-sm font-light">New collection</h5>
        <h1 className="latin  text-6xl font- scheme-light font-serif">THE NEW RING <br /> </h1><br />
         <h1 className="word text-6xl font-serif  "> SENSATION</h1>
        <h4 className="words text-2xl mt-4"><br />
          “Pain itself is something to be experienced, connected to the soul.
          To be elite is to tell, bound by grief and care, the lion’s soft touch.”
        </h4>
        <button className="button mt-6 px-6 py-2 border border-black hover:bg-black hover:text-black">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}