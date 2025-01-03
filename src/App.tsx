import './App.css'

function App() {

  return (
    <>
      <h1 className='bg-emerald-400 p-3'></h1>
      <div className='flex justify-end items-center gap-2 text-xs p-4'>
        <p>HOME</p>
        <p>ABOUT US</p>
        <p>OUR PORTFOLIO</p>
        <p>UPCOMING EVENTS</p>
        <p>CONTACT US</p>
      </div>
      <div className='bg-purple-950 p-4'>
        <div className='flex flex-col gap-4'>
          <div>
            <p className='text-slate-300 text-xs'>THE EVENT AGENCY</p>
            <p className='font-bold text-white text-2xl'>Convergence</p>
            <p className='text-blue-900 drop-shadow-lg text-2xl font-bold'>INNOVATE,CREATE,ENTHUSE</p>
          </div>
          <div className='flex gap-2 items-center text-sm'>
            <div className='px-4 font-bold bg-white rounded-md'>
              <p>BUY TICKET</p>
            </div>
            <p className='text-slate-300 text-xs'>LET'S TALK</p>
          </div>
          <img src="/img1.jpg" alt="" />
          <div className='font-bold text-3xl'>
            <h1 className='text-emerald-400'>About</h1>
            <h1>Us</h1>
          </div>
          <div className='relative'>
            <div className='absolute top-0 left-0 text-xs p-2 font-semibold'>
              <p>Convex is a leading event management and promotion company headquartered in Malaysia, with the purpose to help companiesto achieve their business objectives and penetrate new markets.. We at Convexcome with an expertise over 2 decades of end-to-end event management. Weconstantly thrive to Innovate, Create, Enthuse - Blend, Resonate, Eloquent, Amalgamate, kind, Engage, Re-unite (ICE BREAKER).</p>
              <br />
              <p>Our team from different verticalsconstantly thrive to deliver customer satisfaction.</p>
            </div>
            <img src="/img2.jpg" alt="" className='w-full' />
          </div>
          <div>
            <div className='font-bold text-3xl'>
              <h1 className='text-emerald-400'>Our</h1>
              <h1>Portfolio</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 mt-2'>
              <div className='relative text-center'>
                <img src="/Health.jpg" alt="" />
                <div className='px-4 flex justify-center'>
                  <p className='absolute top-0 bg-purple-950 px-4 mt-2 text-white text-xs font-semibold'>HEALTHCARE</p>
                </div>
              </div>
              <div className='relative text-center'>
                <img src="/CyberSecurity.jpg" alt="" />
                <div className='px-4 flex justify-center'>
                  <p className='absolute top-0  bg-purple-950 px-4 mt-2 text-white text-xs font-semibold '>CYBERSECURITY</p>
                </div>
              </div>
              <div className='relative text-center'>
                <img src="/hybrid.jpg" alt="" />
                <div className='px-4 flex justify-center'>
                  <p className='absolute top-0  bg-purple-950 px-4 mt-2 text-white text-xs font-semibold'>HYBRID CLOUD</p>
                </div>
              </div>
              <div className='relative text-center'>
                <img src="/ai.webp" alt="" />
                <div className='px-4 flex justify-center'>
                  <p className='absolute top-0  bg-purple-950 px-4 mt-2 text-white text-xs font-semibold'>AI & CX</p>
                </div>
              </div>
              <div className='relative text-center'>
                <img src="/energy.avif" alt="" />
                <div className='px-4 flex justify-center'>
                  <p className='absolute top-0  bg-purple-950 px-4 mt-2 text-white text-xs font-semibold'>ENERGY</p>
                </div>
              </div>
              <div className='relative text-center'>
                <img src="/banking.jpg" alt="" />
                <div className='px-4 flex justify-center'>
                  <p className='absolute top-0  bg-purple-950 px-4 mt-2 text-white text-xs font-semibold'>BANKING & <br />TECNOLOGY</p>
                </div>
              </div>
              <div className='relative text-center'>
                <img src="/Telecom.jpg" alt="" />
                <div className='px-4 flex justify-center'>
                  <p className='absolute top-0  bg-purple-950 px-4 mt-2 text-white text-xs font-semibold'>TELECOM</p>
                </div>
              </div>
              <div className='relative text-center'>
                <img src="/chemical.jpg" alt="" />
                <div className='px-4 flex justify-center'>
                  <p className='absolute top-0  bg-purple-950 px-4 mt-2 text-white text-xs font-semibold'>CHEMICAL & <br />ADDITIVES</p>
                </div>
              </div>
            </div>
          </div>
          <div className='font-bold text-3xl'>
            <h1 className='text-emerald-400'>Upcoming</h1>
            <h1>Events</h1>
          </div>
          <div>
            <div className='bg-white p-6 rounded-2xl '>
              <ul className='list-disc list-inside flex flex-col gap-2'>
                <li>Food Security Asia</li>
                <li>Digital Transformation</li>
                <li>Smart Cities</li>
                <li>Flood Mitigation</li>
                <li>Technology Conference</li>
                <li>Sustainability Conference</li>
              </ul>
            </div>
          </div>
          <div className='font-bold text-3xl'>
            <h1 className='text-emerald-400'>Contact</h1>
            <h1>Us</h1>
          </div>
          <div className='bg-white py-4 px-8 rounded-2xl'>
            <div className='flex flex-col gap-2'>
              <h1 className='font-semibold text-2xl'>We'd love to hear from you</h1>
              <p className='text-xs font-semibold'>Send us a message and we wil get back within 24 hours</p>
              <div className='border border-purple-600'></div>
            </div>
            <div className='flex flex-col gap-4 mt-4'>
              <div className='flex gap-16 items-center'>
                <h1 className='text-xs'>YOUR NAME*</h1>
                <input type="text" className='bg-purple-950 w-2/3' />
              </div>
              <div className='flex gap-2 items-center '>
                <h1 className='text-xs'>YOUR PHONE NUMBER*</h1>
                <input type="text" className='bg-purple-950 w-2/3' />
              </div>
              <div className='flex gap-12 items-center '>
                <h1 className='text-xs'>EMAIL ADDRESS*</h1>
                <input type="text" className='bg-purple-950 w-2/3' />
              </div>
              <div className='flex gap-2 items-center '>
                <h1 className='text-xs'>ORGANISING COMPANY*</h1>
                <input type="text" className='bg-purple-950 w-2/3' />
              </div>
              <div className='flex gap-12 items-center '>
                <h1 className='text-xs'>CONFERENCE*</h1>
                <input type="text" className='bg-purple-950 w-2/3' />
              </div>
              <div className='flex gap-8 items-center '>
                <h1 className='text-xs'>CONFERENCE DATE*</h1>
                <input type="text" className='bg-purple-950 w-2/3' />
              </div>
              <div className='flex gap-12 items-center'>
                <h1 className='text-xs'>YOUR MESSAGE*</h1>
                <input type="text" className='bg-purple-950 w-2/3' />
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center text-white font-bold text-2xl'>
            <h1>BEST CUSTOMER EXPERIENCE</h1>
            <h1>MORE BUSINESS</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
