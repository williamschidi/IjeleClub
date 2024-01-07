import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { indexImages as images } from './imgArrays';
import ProgressBarsContainer from './ProgressBarsContainer';

const BackgroundContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
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

const FloatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 4rem;
  position: absolute;
  bottom: -10rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  @media screen and (max-width: 1200px) {
    gap: 1rem;
    bottom: -5rem;
  }
`;

// const TextContainer = styled.p`
//   background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
//   width: 40%;
//   padding: 0 0 2rem 0;
//   border-radius: 5px;
// `;
const Text = styled.div`
  width: 40%;
  color: var(--white-color);
  font-size: 4rem;
  font-weight: bold;
  padding: 2rem 0;
  opacity: 1;
  ${(props) =>
    props.type === 'current' &&
    css`
      opacity: 1;
      z-index: -1;
      transition: none;
    `}

  @media screen and (max-width:1150px) {
    font-size: 2rem;
  }
`;

function HeroSection() {
  const [imageInd, setImageInd] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageInd((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
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
      <FloatContainer>
        {/* <TextContainer> */}
        <Text>{images[imageInd].text}</Text>
        {/* </TextContainer> */}
        <ProgressBarsContainer imageInd={imageInd} />
      </FloatContainer>
    </>
  );
}

export default HeroSection;
