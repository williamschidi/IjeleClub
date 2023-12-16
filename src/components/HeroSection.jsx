import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const BackgroundContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: 100%;
  z-index: -5;
  background: #ccc;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 40%;
  height: 100%;
  opacity: 0;
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
  { src: 'image1.jpg', alt: 'image1' },
  { src: 'image2.jpg', alt: 'image2' },
  { src: 'image3.jpg', alt: 'image3' },
  { src: 'image4.jpg', alt: 'image4' },
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
      {images.map((img, ind) => (
        <BackgroundImage
          key={ind}
          src={img.src}
          alt={img.alt}
          type={ind === imageInd ? 'current' : ''}
        />
      ))}
    </BackgroundContainer>
  );
}

export default HeroSection;
