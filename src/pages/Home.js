import React from 'react'
import AllAdds from '../components/AllAdds'
import CustomAIAvtar from '../components/CustomAIAvtar'
import BrandEditoral from '../components/BrandEditoral'
import Educational from '../components/Educational'
import Podcast from '../components/Podcast'
import Events from '../components/Events'
import Drone from '../components/Drone'

const Home = () => {


    return (
        <div>
            <section className='w-full relative h-screen'>
                <div className='absolute w-full h-full overflow-hidden'>
                    <div className='absolute top-0 left-0 w-full h-full bg-black'>
                        <iframe
                            className='absolute top-[-4.47rem] left-0 w-full h-full px-10 ml-1'
                            src="https://player.vimeo.com/video/820582732?title=0&byline=0&portrait=0&muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963"
                            style={{ width: '100%', height: '760px' }}
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <span className='flex text-center text-white text-5xl font-bold text-wrap'>Scaleable Video Production - Custom AI Avatars | Ads | Proven Brand Growth</span>
                    </div>
                </div>
            </section>
            <section className="relative overflow-hidden pb-10">
                <div className="text-center text-black mb-4 mt-10">
                    <h3 className="text-2xl">Clients</h3>
                </div>
                <div className="whitespace-nowrap overflow-hidden">
                    <div className="inline-block animate-marquee">
                        <div className="inline-block px-10 py-5">
                            <img className="h-28" src="https://bouboulena.com/admin/assets/uploads/clientlogos/1718786223_Dinners-DJ9TFGaf.png" alt="Image 0" />
                        </div>
                        <div className="inline-block px-10 py-5">
                            <img className="h-28" src="https://bouboulena.com/admin/assets/uploads/clientlogos/1718786223_PARADISE_FARMS-By3OxP7p.png" alt="Image 1" />
                        </div>
                        <div className="inline-block px-10 py-5">
                            <img className="h-28" src="https://bouboulena.com/admin/assets/uploads/clientlogos/1718786223_Alkemis-yKNdbslt.png" alt="Image 2" />
                        </div>
                        <div className="inline-block px-10 py-5">
                            <img className="h-28" src="https://bouboulena.com/admin/assets/uploads/clientlogos/1719319765_HIGHERDOSE-BLfKFPQA.png" alt="Image 3" />
                        </div>
                        <div className="inline-block px-10 py-5">
                            <img className="h-28" src="https://bouboulena.com/admin/assets/uploads/clientlogos/1719319765_1_Wondermed-BidHJ6hE.png" alt="Image 4" />
                        </div>
                        <div className="inline-block px-10 py-5">
                            <img className="h-28" src="https://bouboulena.com/admin/assets/uploads/clientlogos/1718786223_Dinners-DJ9TFGaf.png" alt="Image 5" />
                        </div>
                        <div className="inline-block px-10 py-5">
                            <img className="h-28" src="https://bouboulena.com/admin/assets/uploads/clientlogos/1718786223_PARADISE_FARMS-By3OxP7p.png" alt="Image 6" />
                        </div>
                        <div className="inline-block px-10 py-5">
                            <img className="h-28" src="https://bouboulena.com/admin/assets/uploads/clientlogos/1718786223_Alkemis-yKNdbslt.png" alt="Image 7" />
                        </div>
                        <div className="inline-block px-10 py-5">
                            <img className="h-28" src="https://bouboulena.com/admin/assets/uploads/clientlogos/1719319765_HIGHERDOSE-BLfKFPQA.png" alt="Image 8" />
                        </div>
                        <div className="inline-block px-10 py-5">
                            <img className="h-28" src="https://bouboulena.com/admin/assets/uploads/clientlogos/1719319765_1_Wondermed-BidHJ6hE.png" alt="Image 9" />
                        </div>
                    </div>
                </div>
            </section>
            <AllAdds />
            <CustomAIAvtar/>
            <Educational/>
            <Podcast/>
            <BrandEditoral />
            <Events/>
            <Drone/>
        </div>



    )
}

export default Home
