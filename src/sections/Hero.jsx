import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { statistics } from "../constants";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container border-2 border-red-500 p-2"
    >
      <div className="w-full relative xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28 border-2 border-blue-500">
        <p className="text-xl font-montserrat text-coral-red">Our summer collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Shop now" iconURL={arrowRight}/>
        <div className="flex justify-start items-start fles-wrap w-full mt-20 gap-16 border-2 border-green-500">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero