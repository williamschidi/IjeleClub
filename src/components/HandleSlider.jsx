// // import { useState } from 'react';
// // import styled from 'styled-components';

import { useRef } from 'react';
// import { Scrollbars } from 'react-custom-scrollbars';

// // const SliderContainer = styled.div`
// //   position: relative;
// //   width: 100%;
// //   overflow: visible;
// // `;
// // const SliderTrack = styled.div`
// //   display: flex;
// //   transition: transform 0.5s ease-in-out;
// // `;
// // const SliderItem = styled.div`
// //   flex: 0, 0, 25%;
// //   box-sizing: border-box;
// //   padding: 10px;
// // `;

// // function HandleSlider() {
// //   const [position, setPosition] = useState(0);

// //   function moveRight() {
// //     setPosition((prev) => prev + 25);
// //   }

// //   function moveLeft() {
// //     setPosition((prev) => prev - 25);
// //   }
// //   return (
// //     <SliderContainer>
// //       <SliderTrack style={{ transform: `translateX(${position}%)` }}>
// //         <SliderItem>Item 1</SliderItem>
// //         <SliderItem>Item 2</SliderItem>
// //         <SliderItem>Item 3</SliderItem>
// //         <button onClick={moveRight}>Right</button>
// //         <button onClick={moveLeft}>Left</button>
// //       </SliderTrack>
// //     </SliderContainer>
// //   );
// // }

// // export default HandleSlider;

function HorizontalScrollComponent() {
  const scrollContainerRef = useRef(null);

  function scrollLeft() {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 100;
    }
  }

  function scrollRight() {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 100;
    }
  }

  return (
    <div style={{ overflowX: 'hidden', width: '100%' }}>
      <div
        ref={scrollContainerRef}
        style={{
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          width: 'calc(100% + 1px)',
        }}
      >
        <div style={{ display: 'inline-block', width: '10000px' }}>content</div>
      </div>

      <button onClick={scrollLeft}>Scroll Left</button>
      <button onClick={scrollRight}>Scroll Right</button>
    </div>
  );
}

export default HorizontalScrollComponent;
