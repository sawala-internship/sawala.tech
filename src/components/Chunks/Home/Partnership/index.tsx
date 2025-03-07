import SliderPartnership from "@/components/Slider"
import { Element } from "react-scroll"
export const Partnership: React.FC = () => {
  return (
    <Element name="partnership" className="element">
    <section className=" h-max font-Inter w-full flex justify-center pt-16 pb-28 px-1 transition-all duration-300 bg-white">
      <div className="flex flex-col space-y-8 items-center w-full">
        <h1 className="font-bold text-4xl text-customBlack ">
          Partnership <span className="text-secondary -ml-2 ">_</span>
        </h1>
      <SliderPartnership/>
      </div>
    </section>
    </Element>
  )
}

