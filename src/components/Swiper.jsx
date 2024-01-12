// import { useState } from 'react';

// function Swiper() {
//   const [startX, setStartX] = useState(null);
//   const [offsetX, setOffsetX] = useState(0);

//   function handleTouchStart(e) {
//     setStartX(e.touches[0].clientX - offsetX);
//   }

//   function handleTouchMove(e) {
//     if (startX !== null) {
//       const newOffsetX = e.touches[0].clientX - startX;
//       setOffsetX(newOffsetX);
//     }
//   }
//   function handleTouchEnd() {
//     setStartX(null);
//   }
//   return (
//     <carouselContainer
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       <CarouselTrack
//         style={{ transform: `translateX(${offsetX}px)` }}
//       ></CarouselTrack>
//     </carouselContainer>
//   );
// }

// export default Swiper;
