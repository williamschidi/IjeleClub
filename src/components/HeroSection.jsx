import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const BackgroundContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: 100%;
  /* z-index: -5; */
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.8;
  z-index: -1;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  object-fit: cover;
  transition: opacity 2s ease-in-out;
  ${(props) =>
    props.type === 'current' &&
    css`
      opacity: 1;
      z-index: -1;
      transition: none;
    `}
`;

const images = [
  { src: 'pic1.jpg', alt: 'pic1' },

  { src: 'pic5.jpg', alt: 'pic5' },
  { src: 'pic6.jpg', alt: 'pic6' },
  { src: 'pic7.jpg', alt: 'pic7' },
  { src: 'pic8.jpg', alt: 'pic8' },
];

function HeroSection() {
  const [imageInd, setImageInd] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageInd((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <BackgroundContainer>
      <Overlay>
        {images.map((img, ind) => (
          <BackgroundImage
            key={ind}
            src={img.src}
            alt={img.alt}
            type={ind === imageInd ? 'current' : ''}
          />
        ))}
      </Overlay>
    </BackgroundContainer>
  );
}

export default HeroSection;
