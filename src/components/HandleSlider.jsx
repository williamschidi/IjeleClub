// import { useState } from 'react';
// import styled from 'styled-components';

// const SliderContainer = styled.div`
//   position: relative;
//   width: 100%;
//   overflow: visible;
// `;
// const SliderTrack = styled.div`
//   display: flex;
//   transition: transform 0.5s ease-in-out;
// `;
// const SliderItem = styled.div`
//   flex: 0, 0, 25%;
//   box-sizing: border-box;
//   padding: 10px;
// `;

// function HandleSlider() {
//   const [position, setPosition] = useState(0);

//   function moveRight() {
//     setPosition((prev) => prev + 25);
//   }

//   function moveLeft() {
//     setPosition((prev) => prev - 25);
//   }
//   return (
//     <SliderContainer>
//       <SliderTrack style={{ transform: `translateX(${position}%)` }}>
//         <SliderItem>Item 1</SliderItem>
//         <SliderItem>Item 2</SliderItem>
//         <SliderItem>Item 3</SliderItem>
//         <button onClick={moveRight}>Right</button>
//         <button onClick={moveLeft}>Left</button>
//       </SliderTrack>
//     </SliderContainer>
//   );
// }

// export default HandleSlider;
