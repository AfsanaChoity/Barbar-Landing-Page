// import arrow from "../assets/svg/rightArrow.svg"
import arrow from "../../assets/svg/rightArrow.svg"

export default function About({heading, subheading, onButtonClick}) {
  return (
    <div>
        <div className="  text-center ">
                <h2 className="text-2xl md:text-[34px] xl:text-[64px] poppins-bold mb-8">{heading}</h2>
                
                <p className="poppins-light text-xl md:text-2xl xl:text-[38px] my-4">{subheading}</p>
                <div className="flex  justify-center mt-6">
                    <button onClick={onButtonClick} className="cursor-pointer flex items-center gap-2 border poppins-regular md:text-[20px]  py-[14px] px-[26px] rounded-lg">
                        More Info <img src={arrow} alt="" className="w-8 md:w-10" />
                    </button>
                </div>
            </div>
    </div>
  )
}
