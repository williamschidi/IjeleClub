import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { indexImages as images } from './imgArrays';
import ProgressbarContainer from './ProgressbarContainer';

const BackgroundContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: 100%;
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

const TextContainer = styled.p`
  position: absolute;
  bottom: 3rem;
  left: 10rem;

  background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  width: 40%;

  padding: 0 0 2rem 0;
  border-radius: 5px;
`;
const Text = styled.div`
  color: var(--white-color);
  font-size: 4rem;
  font-weight: bold;
  padding: 2rem 3rem;
  opacity: 1;
  ${(props) =>
    props.type === 'current' &&
    css`
      opacity: 1;
      z-index: -1;
      transition: none;
    `}
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
          <>
            <BackgroundImage
              key={ind}
              src={img.src}
              alt={img.alt}
              type={ind === imageInd ? 'current' : ''}
            />

            <ProgressbarContainer imageInd={imageInd} />
          </>
        ))}
      </BackgroundContainer>

      <TextContainer>
        <Text>{images[imageInd].text}</Text>
      </TextContainer>
    </>
  );
}

export default HeroSection;
