import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
// import ProgressBar from './ProgressBar';

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

const MatchNew = styled.div`
  position: absolute;
  bottom: 10rem;
  right: 65%;
  width: 40rem;
  height: 10rem;

  border-right: 1px solid #868e96;
  background: #ced4da;

  z-index: 5;
  ${(props) =>
    props.ind &&
    css`
      transform: translateX(${100 * props.ind}%);
    `}
`;

const images = [
  { src: 'pic5.jpg', alt: 'pic5' },
  { src: 'pic6.jpg', alt: 'pic6' },
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
          <>
            <BackgroundImage
              key={ind}
              src={img.src}
              alt={img.alt}
              type={ind === imageInd ? 'current' : ''}
            />
            <MatchNewBar />
          </>
        ))}
        {images.map(
          (img, ind) => ind === imageInd && <ProgressBar key={ind} />
        )}
      </Overlay>
    </BackgroundContainer>
  );
}

function MatchNewBar() {
  return (
    <>
      {images.map((_, ind) => (
        <MatchNew ind={ind} key={ind}>
          {/* <ProgressBar ind={ind} /> */}
        </MatchNew>
      ))}
    </>
  );
}

const ProgressBarContainer = styled.div`
  width: 10rem;
  margin: 20px;
`;

const Progress = styled.div`
  position: absolute;
  bottom: 10rem;
  left: 7rem;
  height: 5px;
  background-color: #000;
  transition: width 0.3s ease-in-out;
  ${(props) =>
    props.width &&
    css`
      width: ${props.width / 3}%;
    `}
  z-index: 6;
`;

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5000;
    const interval = 100;
    let elapseTime = 0;
    const updateProgress = () => {
      elapseTime += interval;
      const calculatedProgress = (elapseTime / duration) * 100;
      setProgress(calculatedProgress);
      if (calculatedProgress >= 100) {
        clearInterval(progressInterval);
      }
    };
    const progressInterval = setInterval(updateProgress, interval);
    return () => clearInterval(progressInterval);
  }, []);
  return (
    <ProgressBarContainer>
      {progress < 100 && <Progress width={progress}></Progress>}
    </ProgressBarContainer>
  );
}

export default HeroSection;
