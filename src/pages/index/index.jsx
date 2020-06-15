import { useState, useEffect } from '@tarojs/taro';
import { Swiper, SwiperItem, Image } from '@tarojs/components';
import './index.less';

export default function () {
  const [swiperList, setSwiperList] = useState([]);
  useEffect(() => {
    const res = [
      {
        id: 0,
        url: require('../../assets/images/demo-swiper.png'),
      },
      {
        id: 1,
        url: require('../../assets/images/demo-swiper-2.png'),
      },
    ];
    setSwiperList(res);
  }, []);

  return (
    <Swiper
      className="swiper"
      circular
      indicatorDots
      autoplay
    >
      {
        swiperList.map(each => (
          <SwiperItem
            key={each.id}
          >
            <Image
              className="swiper-img"
              src={each.url}
            />
          </SwiperItem>
        ))
      }
    </Swiper>
  )
}
