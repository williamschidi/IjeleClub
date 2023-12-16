// import { useEffect } from 'react';
// import styled from 'styled-components';

// const SliderContainer = styled.div`
//   max-width: 100rem;
//   height: 50rem;
//   margin: 0 auto;
//   position: relative;

//   /* IN THE END */
//   overflow: hidden;
// `;
// const Slider = styled.div`
//   position: absolute;
//   top: 0;
//   width: 100%;
//   height: 50rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   /* THIS creates the animation! */
//   transition: transform 1s;
// `;

// const Img = styled.img`
//   width: 50%;
//   height: 100%;
//   object-fit: cover;
// `;

// function SliderComponent() {
//   useEffect(() => {
//     document.querySelectorAll;
//   }, []);
//   return (
//     <SliderContainer>
//       <Slider>
//         <Img src="image1.jpg" alt="image1" />
//       </Slider>
//       <Slider>
//         <Img src="image2.jpg" alt="image2" />
//       </Slider>
//       <Slider>
//         <Img src="image3.jpg" alt="image3" />
//       </Slider>
//     </SliderContainer>
//   );
// }

// export default SliderComponent;
// import { useEffect, useRef } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// function MySliderComponent() {
//   const sliderRef = useRef(null);
//   useEffect(() => {
//     if (sliderRef.current) {
//       const intervalId = setInterval(() => {
//         sliderRef.current.slickNext();
//       }, 6000);

//       return () => clearInterval(intervalId);
//     }
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 2000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <Slider ref={sliderRef} {...settings}>
//       <div>
//         <img src="image1.jpg" alt="image1" />
//       </div>
//       <div>
//         <img src="image2.jpg" alt="image2" />
//       </div>
//       <div>
//         <img src="image3.jpg" alt="image3" />
//       </div>
//       <div>
//         <img src="image4.jpg" alt="image4" />
//       </div>
//     </Slider>
//   );
// }

// export default MySliderComponent;
