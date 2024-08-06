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
      const AllAdds = fetchedData.data.data['All Ads'] || [];
      const filteredData = AllAdds.flatMap(ad => ad.content);
      setAdds(filteredData);
    };
    fetchData();
  }, []);

  const sliderSettings = {
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

  const sliderSettings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
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

  return (
    <div className='bg-black text-white'>
      <h1 className='px-2 pt-4 text-4xl font-bold'>ADS</h1>
      {adds.map((add, index) => (
        <div key={index}>
          <h2 className='px-2 py-6 text-2xl uppercase font-bold'>{add.cat_name}</h2>
          <div className='space-y-10'>
            <div>
              <Slider {...sliderSettings}>
                {add.content?.map((add1, addindex) => (
                  add1.type === 'hrz' && (
                    <div
                      key={addindex}
                      className='px-2 relative'
                      onMouseEnter={() => setHoveredAd(add1)}
                      onMouseLeave={() => setHoveredAd(null)}
                    >
                      {hoveredAd === add1 ? (
                        <iframe
                          src={`https://player.vimeo.com/video/${new URL(add1.url).pathname.split('/').pop()}`}
                          className='w-full h-48 rounded-lg'
                          allow='autoplay fullscreen'
                          allowFullScreen
                        />
                      ) : (
                        <img
                          src={`https://bouboulena.com${add1.p_image}`}
                          className='w-full h-48 object-cover rounded-lg'
                        />
                      )}
                    </div>
                  )
                ))}
              </Slider>
            </div>
            <div>
              <Slider {...sliderSettings1}>
                {add.content?.map((add1, addindex) => (
                  add1.type === 'vrt' && (
                    <div
                      key={addindex}
                      className='px-2 relative'
                      onMouseEnter={() => setHoveredAd(add1)}
                      onMouseLeave={() => setHoveredAd(null)}
                    >
                      {hoveredAd === add1 ? (
                        <iframe
                          src={`https://player.vimeo.com/video/${new URL(add1.url).pathname.split('/').pop()}`}
                          className='w-full h-48 rounded-lg'
                          allow='autoplay fullscreen'
                          allowFullScreen
                        />
                      ) : (
                        <img
                          src={`https://bouboulena.com${add1.p_image}`}
                          className='w-full h-96 object-cover rounded-lg'
                        />
                      )}
                    </div>
                  )
                ))}
              </Slider>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllAdds;
