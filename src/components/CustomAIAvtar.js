import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AllAdds = () => {
  const [adds, setAdds] = useState([]);
  const [hoveredAd, setHoveredAd] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await axios.get('https://impactmindz.in/client/boub/admin/api/product_testing');
      const AllAdds = fetchedData.data.data['Custom A.I Avatar'] || [];
      const filteredData = AllAdds.flatMap(ad => ad.content);
      setAdds(filteredData);
    };
    fetchData();
  }, []);

  const getSliderSettings = (numImages) => {
    if (numImages < 3) {
      return {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: numImages,
        slidesToScroll: numImages,
        initialSlide: 0,
        arrows: false
      };
    }
  
    return {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  };
  
  const numImages = 2
  const sliderSettings = getSliderSettings(numImages);

  const getSliderSettings1 = (numImages1) => {
    if (numImages1 < 6) {
      return {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: numImages,
        slidesToScroll: numImages,
        initialSlide: 0,
        arrows: false
      };
    }
    return {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  };
  
  const numImages1 = 5
  const sliderSettings1 = getSliderSettings1(numImages1)

  return (
    <div className='bg-black text-white'>
      <h1 className='px-2 pt-4 text-4xl font-bold'>ADS</h1>
      {adds.map((add, index) => (
        <div key={index}>
          <div className='space-y-10'>
            <div>
              <Slider {...sliderSettings}>
                {add.type === 'hrz' && (
                    <div
                      key={index}
                      className='px-2 relative'
                      onMouseEnter={() => setHoveredAd(add)}
                      onMouseLeave={() => setHoveredAd(null)}
                    >
                      {hoveredAd === add ? (
                        <iframe
                          src={`https://player.vimeo.com/video/${new URL(add.url).pathname.split('/').pop()}`}
                          className='w-full h-48 rounded-lg'
                          allow='autoplay fullscreen'
                          allowFullScreen
                        />
                      ) : (
                        <img
                          src={`https://bouboulena.com${add.p_image}`}
                          className='w-full h-48 object-cover rounded-lg'
                        />
                      )}
                    </div>
                  )
                }
              </Slider>
            </div>
            <div>
              <Slider {...sliderSettings1}>
                {add.type === 'vrt' && (
                    <div
                      key={index}
                      className='px-2 relative'
                      onMouseEnter={() => setHoveredAd(add)}
                      onMouseLeave={() => setHoveredAd(null)}
                    >
                      {hoveredAd === add ? (
                        <iframe
                          src={`https://player.vimeo.com/video/${new URL(add.url).pathname.split('/').pop()}`}
                          className='w-full h-48 rounded-lg'
                          allow='autoplay fullscreen'
                          allowFullScreen
                        />
                      ) : (
                        <img
                          src={`https://bouboulena.com${add.p_image}`}
                          className='w-full h-96 object-cover rounded-lg'
                        />
                      )}
                    </div>
                  )
                }
              </Slider>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllAdds;
