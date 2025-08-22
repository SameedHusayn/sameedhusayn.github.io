import React, { useContext, useRef, useLayoutEffect, useCallback } from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { ThemeContext } from '../../contexts/ThemeContext';
import { testimonialsData } from '../../data/testimonialsData';
import './Testimonials.css';

function Testimonials() {
  const { theme } = useContext(ThemeContext);

  const sliderRef = useRef();
  const headerRef = useRef(null);
  const bodyRef = useRef(null);
  const sliderWrapRef = useRef(null);

  const positionQuote = useCallback(() => {
    if (!headerRef.current || !bodyRef.current || !sliderWrapRef.current) return;

    const headerBottom = headerRef.current.getBoundingClientRect().bottom;
    const activeImg = sliderWrapRef.current.querySelector('.slick-active .review--img');
    if (!activeImg) return;

    const imgTop = activeImg.getBoundingClientRect().top;
    const bodyTop = bodyRef.current.getBoundingClientRect().top;

    const y = (headerBottom + imgTop) / 2 - bodyTop;
    bodyRef.current.style.setProperty('--quote-y', `${y}px`);
  }, []);

  useLayoutEffect(() => {
    positionQuote();
    window.addEventListener('resize', positionQuote);
    return () => window.removeEventListener('resize', positionQuote);
  }, [positionQuote]);

  const settings = {
    dots: true,
    adaptiveHeight: true,
    infinite: true,
    speed: 800,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    margin: 3,
    loop: true,
    autoplaySpeed: 3000,
    draggable: true,
    swipeToSlide: true,
    swipe: true,
    onInit: positionQuote,
    afterChange: positionQuote,
  };

  const gotoNext = () => sliderRef.current.slickNext();
  const gotoPrev = () => sliderRef.current.slickPrev();

  return (
    <>
      {testimonialsData.length > 0 && (
        <div className='testimonials' style={{ backgroundColor: theme.primary }}>
          <div className='testimonials--header' ref={headerRef}>
            <h1 style={{ color: theme.secondary }}>Testimonials</h1>
          </div>

          <div className='testimonials--body' ref={bodyRef}>
            <FaQuoteLeft
              className='quote'
              style={{ color: theme.secondary }}
              aria-hidden='true'
            />

            <div
              className='testimonials--slider'
              style={{ backgroundColor: theme.primary }}
              ref={sliderWrapRef}
            >
              <Slider {...settings} ref={sliderRef}>
                {testimonialsData.map((test) => (
                  <div className='single--testimony' key={test.id}>
                    <div className='testimonials--container'>
                      <div
                        className='review--img'
                        style={{ backgroundColor: theme.secondary }}
                      >
                        <img src={test.image} alt={test.name} />
                      </div>

                      <div
                        className='review--content'
                        style={{ backgroundColor: theme.secondary, color: theme.tertiary }}
                      >
                        <p>{test.text}</p>
                        <h1>{test.name}</h1>
                        <h4>{test.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>

              <button className='prevBtn' onClick={gotoPrev} style={{ backgroundColor: theme.secondary }}>
                <FaArrowLeft style={{ color: theme.primary }} aria-label='Previous testimonial' />
              </button>
              <button className='nextBtn' onClick={gotoNext} style={{ backgroundColor: theme.secondary }}>
                <FaArrowRight style={{ color: theme.primary }} aria-label='Next testimonial' />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Testimonials;
