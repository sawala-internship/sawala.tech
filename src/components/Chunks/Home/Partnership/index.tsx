import SliderPartnership from '@/components/Slider'
import { Element } from 'react-scroll'
export const Partnership: React.FC = () => {
  return (
    <>
      {/* @ts-ignore */}
      <Element name="partnership" className="element">
        <section className="flex justify-center w-full px-1 pt-16 transition-all duration-300 bg-white  h-max font-Inter pb-28">
          <div className="flex flex-col items-center w-full space-y-8">
            <h1 className="text-4xl font-bold text-customBlack ">
              Partnership <span className="-ml-2 text-secondary ">_</span>
            </h1>
            <SliderPartnership />
          </div>
        </section>
      </Element>
    </>
  )
}
