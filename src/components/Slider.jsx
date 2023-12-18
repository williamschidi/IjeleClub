// import { useEffect, useState } from 'react';
// import styled from 'styled-components';

// const SliderContainer = styled.div`
//   width: 100rem;
//   height: auto;
//   overflow: hidden;
//   background: red;
// `;

// const Img = styled.img`
//   /* display: inline-block; */
//   width: 50%;
//   margin: 0 auto;
//   height: 100%;
//   transition: opacity 0.5s ease;
// `;

// function Slider() {
//   const [currentImage, setCurrentImage] = useState(0);

//   const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImage((prev) => prev + 1);
//     }, 3000);

//     if (currentImage === images.length - 1) setCurrentImage(0);
//     return () => clearInterval(intervalId);
//   }, [currentImage, images.length]);
//   return (
//     <SliderContainer>
//       <Img src={images[currentImage]} alt={`image${currentImage + 1}`} />
//     </SliderContainer>
//   );
// }

// export default Slider;
