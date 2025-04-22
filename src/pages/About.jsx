import { Plane, Ship, Car, Users, Bus, CarFront, Ambulance, CircleParking, ParkingMeter, AlarmSmoke, DollarSign, Wrench } from "lucide-react"
import Mitish from "../assets/mitish.jpg"
import Rishita from "../assets/rishita.jpg"
import Paarth from "../assets/paarth.jpeg"
import Sarthak from "../assets/sarthak.jpeg"


export default function About() {
  return (
    <div>
      <section className="relative bg-[#C9C9C9] min-h-[30vh] text-white py-20 bg-gradient-to-r from-gray-400 via-zinc-400 to-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-5xl font-bold mb-6 text-white">About Us</h1>
          <p className="max-w-2xl mx-auto text-xl font-bold text-white">PlanIT - Revolutionizing Urban Mobility and Planning. Your one way platform for saving PlanIT.</p>
        </div>
      </section>


      <section className="relative bg-[#C9C9C9] min-h-[30vh] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Bus className="w-12 h-12 mx-auto mb-4 text-black" />
              <h3 className="font-semibold mb-2 text-black">Realtime Bus location</h3>
              <p className="text-gray-600">Provides optimal journey routes using bus</p>
            </div>
            <div className="text-center">
              <Ambulance className="w-12 h-12 mx-auto mb-4 text-black" />
              <h3 className="font-semibold mb-2 text-black">Quick Response: Accident System</h3>
              <p className="text-gray-600">Ensures rapid assistance in case of accident</p>
            </div>
            <div className="text-center">
              <CircleParking className="w-12 h-12 mx-auto mb-4 text-black" />
              <h3 className="font-semibold mb-2 text-black">Smart Traffic Management</h3>
              <p className="text-gray-600">No longer waits at red light.</p>
            </div>
            <div className="text-center">
              <ParkingMeter className="w-12 h-12 mx-auto mb-4 text-black" />
              <h3 className="font-semibold mb-2 text-black">Park-it-UP</h3>
              <p className="text-gray-600">Book your space at public parking and avoid the hassle of lines.</p>
            </div>
            <div className="text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-black" />
              <h3 className="font-semibold mb-2 text-black">Carbon Credit Trading</h3>
              <p className="text-gray-600">Sell or Buy your carbon credits</p>
            </div>
            <div className="text-center">
              <Wrench className="w-12 h-12 mx-auto mb-4 text-black" />
              <h3 className="font-semibold mb-2 text-black">Report issues in your area</h3>
              <p className="text-gray-600">Capture a photo and geotag us to report a issue in your area</p>
            </div>
          </div>
          <div className="text-black text-xl flex justify-center items-center text-center font-bold my-20">Do eco-friendly activities that saves our environment and Earn Huge Rewards in form of voucher, cashbacks, coupons and more</div>
        </div>
      </section>


      <section className="relative bg-[#C9C9C9] min-h-[50vh] text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-black">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img src={Mitish} alt></img>
              </div>
              <h3 className="font-semibold text-black">Mitish Raina</h3>
              <p className="text-gray-600 text-sm">Full-stack Developer</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img src={Rishita} alt></img>
              </div>
              <h3 className="font-semibold text-black">Rishita Sharma</h3>
              <p className="text-gray-600 text-sm">AI & ML</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img src={Paarth} alt></img>
              </div>
              <h3 className="font-semibold text-black">Paarth Sharma</h3>
              <p className="text-gray-600 text-sm">AI & ML</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img src={Sarthak} alt></img>
              </div>
              <h3 className="font-semibold text-black">Sarthak Sharma</h3>
              <p className="text-gray-600 text-sm">IoT</p>
            </div>

          </div>
        </div>
      </section>


      <section className="relative bg-[#C9C9C9] min-h-[80vh] text-white py-20">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-black">Some Other Technologies to improve Urban Planning</h2>
          <div className="">
            <h1 className="text-black text-4xl font-semibold m-3">Introducing CCUS</h1>
            <p className="w-full">
              <p className="text-2xl text-black font-bold">CCUS: Carbon Capture, Utilization and Storage</p>
              <h1 className="text-black text-xl font-semibold">1. Carbon Capture</h1>
              <p className="text-gray-600">The first step is to capture CO2 emissions from sources like power plants, factories, or other industrial processes. There are three main methods for capturing CO2:

                Post-Combustion Capture:
                CO2 is captured from the exhaust gases after fossil fuels are burned. This method uses chemical solvents (like amines) to absorb CO2 from flue gases.

                Pre-Combustion Capture:
                Fossil fuels are processed before combustion to separate CO2. For example, coal or natural gas is converted into a mixture of hydrogen and CO2, and the CO2 is removed.

                Oxy-Fuel Combustion:
                Fossil fuels are burned in pure oxygen instead of air, resulting in a high concentration of CO2 in the exhaust gas, making it easier to capture.</p>

              <h1 className="text-black text-xl font-semibold">2. Carbon Utilization</h1>
              <p className="text-gray-600">Captured CO2 can be reused for creating valuable products, reducing the need for storage. Some common uses include:

                Building Materials: CO2 can be converted into concrete or cement, which traps it permanently.
                Fuels: CO2 can be combined with hydrogen to produce synthetic fuels like methanol or diesel.
                Chemicals: CO2 can be used to create plastics, fertilizers, or other industrial chemicals.
                Carbon Nanomaterials: Used in electronics, batteries, and advanced materials.
                This step helps create a circular carbon economy, turning waste into useful resources.</p>

              <h1 className="text-black text-xl font-semibold">3. Carbon Storage</h1>
              <p className="text-gray-600">If the CO2 cannot be reused, it is stored underground to prevent it from entering the atmosphere. The process involves:

                Compression: CO2 is compressed into a liquid-like state for easier transport and storage.
                Transportation: CO2 is transported to storage sites via pipelines, ships, or trucks.
                Storage: CO2 is injected deep into underground rock formations, such as:
                Depleted Oil and Gas Reservoirs
                Deep Saline Aquifers
                Unmineable Coal Seams
                These geological formations securely trap the CO2, preventing it from leaking into the atmosphere.</p>
              <div className="p-7 py-10">
                <p className="text-black text-4xl font-semibold">FOR YOU READ:</p>
                <a href='https://dst.gov.in/carbon-capture-utilisation-and-storage-ccus' className="text-blue-700 hover:underline font-semibold">DST.GOV.IN (RESEARCH)</a> <br />
                <a href='https://www.aiche.org/ccusnetwork/what-ccus' className="text-blue-700 hover:underline font-semibold">AICHE (RESEARCH)</a><br />
                <a href='https://www.aiche.org/ccusnetwork/videos' className="text-blue-700 hover:underline font-semibold">NSF SCIENCE (RESEARCH)</a><br />
                <div className="flex flex-wrap justify-center gap-10">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/GYlIYCHsh0o?si=3SE479-b4g6Ti7XN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/S5lHxzossh8?si=7LnRb02qfeKU1r0H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/clKS_dbNwfc?si=ZfGI1EPbg79RcEUv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
            </p>
          </div>
        </div>
      </section>


      <section className="relative bg-[#C9C9C9] min-h-[80vh] text-white py-20">
        <div className="container px-4">
          <div className="">
            <h1 className="text-black text-4xl font-semibold m-3">Introducing Piezoelectric Sensors</h1>
            <p className="w-full">
              <p className="text-2xl text-black font-bold">What Are Piezoelectric Sensors?</p>
              <p className="text-gray-600">Piezoelectric sensors are devices that generate an electric charge when subjected to mechanical stress, such as pressure, vibration, or movement. This effect is based on the piezoelectric phenomenon, where certain materials (like quartz, ceramics, or certain polymers) produce electrical energy in response to applied mechanical force.</p>

              <p className="text-2xl text-black font-bold">How Do Piezoelectric Sensors Work?</p>
              <p className="text-gray-600">1. Mechanical Stress: When a force is applied (e.g., pressure or vibration), it deforms the piezoelectric material.
                <p>2. Electric Charge Generation: This deformation creates an electric charge across the material.</p>
                <p>3. Signal Conversion: The electric charge is converted into a measurable electrical signal, which can be processed for various applications.</p>
              </p>

              <p className="text-2xl text-black font-bold">How Are They Useful in Urban Mobility and Sustainability?</p>
              <p className="text-gray-600">1. Smart Roads: Installed in roadways to harness energy from vehicles passing over them, powering nearby streetlights or traffic signals.
                <p>2. Foot Traffic Monitoring: Used in pavements to monitor pedestrian flow and generate energy for smart city infrastructure.</p>
                <p>3. Eco-friendly Solutions: Convert mechanical stress into renewable energy, promoting sustainability in urban environments.</p>
                <p>4. Structural Health Monitoring: Ensure safety by detecting vibrations or stress in bridges and buildings, preventing infrastructure failures.</p>
              </p>
            </p>
          </div>
        </div>
        <div className="p-7 py-10">
          <p className="text-black text-4xl font-semibold">FOR YOU READ:</p>
          <a href='https://www.americanpiezo.com/blog/how-piezoelectric-sensors-work/' className="text-blue-700 hover:underline font-semibold">AmericanPiezo</a> <br />
          <div className="flex flex-wrap justify-center gap-10">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/JoRVcys5PB8?si=a34GXwal5OKFTWAk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/_XABS0dR15o?si=l_4wxVjYGGWAHWbN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
