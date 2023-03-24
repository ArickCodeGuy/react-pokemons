import { useEffect, useRef } from 'react';
import { UICardSliderProps } from './types';
import Swiper from 'Swiper';
import 'swiper/css';

export function UICardSlider(props: UICardSliderProps) {
  const sliderEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderEl.current) return;

    const slider = new Swiper(sliderEl.current, {
      spaceBetween: 30,
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
      },
    });
    slider.init();

    return () => slider.destroy();
  }, []);

  return (
    <div className="swiper" ref={sliderEl}>
      <div className="swiper-wrapper">
        {props.slides &&
          props.slides.map((slide, k) => (
            <div className="swiper-slide" key={k}>
              {slide}
            </div>
          ))}
      </div>
    </div>
  );
}
