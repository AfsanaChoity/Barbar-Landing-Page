import imgMap from "../assets/images/mapPhone.svg";
import pin0 from "../assets/images/Pin.svg";
import pin1 from "../assets/images/Pin (1).svg";
import pin2 from "../assets/images/Pin (2).svg";
import pin3 from "../assets/images/Pin (3).svg";

export default function MapView() {
  const pins = [
    {
      id: 0,
      img: pin0,
      title: "Bar Bertime",
      count: "20",
      // badgeBg: "bg-red-600",
      pos: { left: "19%", top: "4%" },
      // size: "w-40 h-36",
    },
    {
      id: 1,
      img: pin1,
      title: "Hair Salon",
      count: "10",
      // badgeBg: "bg-green-500",
      pos: { left: "38%", top: "14%" },
      // size: "w-30 h-27",
    },
    {
      id: 2,
      img: pin2,
      title: "Skin Fade",
      count: "15",
      // badgeBg: "bg-yellow-400",
      pos: { left: "56%", top: "4%" },
      // size: "w-48 h-45",
    },
    {
      id: 3,
      img: pin3,
      title: "Beard Trim",
      count: "12",
      // badgeBg: "bg-sky-600",
      pos: { left: "72%", top: "10%" },
      // size: "w-28 h-28",
    },
  ];

  return (
    <div>
      <div className="">
      {/* tiny CSS for the float animations + mobile overrides */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0); }
        }
        @keyframes float-slow {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
        .floating { animation: float 3s ease-in-out infinite; will-change: transform; }
        .floating-slow { animation: float-slow 3.2s ease-in-out infinite; will-change: transform; }

       
      `}</style> 
       

      <div className="relative ">

        {/* Map / phone image */}
        <img src={imgMap} alt="map phone" className=" w-full h-auto " />

        {/* Overlay container for pins (absolute over the image) */}
        <div className="absolute inset-0 pointer-events-none ">
          {pins.map((p) => (
            <div
              key={p.id}
              
              className={`absolute   text-center pin-${p.id}`}
              style={{ left: p.pos.left, top: p.pos.top }}
            >
              <div className="relative  ">
                
                <div
                  className="relative  floating"
                  style={{ animationDelay: `${p.id * 0.18}s` }} 
                >
                  {/* count */}
                  <div
                    
                    className={`pin-badge  absolute -top-5 md:-top-7 lg:-top-10 xl:-top-12 2xl:right-0 text-[10px] md:text-[12px] lg:text-xl xl:text-2xl 2xl:text-[32px] px-1 py-0.5 md:px-2 md:py-1 rounded-[5px] text-white poppins-medium floating-slow bg-[#2F2E2E]`}
                    style={{}}
                  >
                    <span className="text-[#D17C51]">{p.count}</span>Que
                  </div>

                  {/* {image} */}
                  <div className={`pin-img ${p.size}`}>
                    <img src={p.img} alt={p.title} className="object-cover w-10 md:w-20 lg:w-30 2xl:w-34" />
                  </div>
                </div>
              </div>

                {/* title below */}
              <div className=" text-[8px] md:text-[16px] lg:text-2xl 2xl:text-[38px] poppins-semibold  text-black pin-title">
                  {p.title}
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* content */}
    <div className="text-center space-y-2 md:space-y-6 px-4 xl:px-0">
          <h2 className="text-2xl lg:text-[64px] poppins-semibold">Map View</h2>
          <p className="poppins-light text-sm lg:text-[28px] xl:text-[36px] text-black/60">See Que of your barber shops so you know how busy they are in real time. </p>
          <h3 className="poppins-semibold lg:text-[36px]">NO MORE LONG QUE WAITING</h3>
    </div>

    </div>
  );
}
