import { useEffect, useState } from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background-image 1s ease-in-out;
`;

const ProgressBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10px;
`;

const ProgressBarIcon = styled.div`
  height: 100%;
  width: ${(props) => props.progress}%;
  background-color: red;
  transition: width 50ms linear;
`;

const backgrounds = [
  'url("pic5.jpg")',
  'url("pic6.jpg")',
  'url("pic8.jpg")',
  //   { src: 'pic5.jpg', alt: 'pic5' },
  //   { src: 'pic6.jpg', alt: 'pic6' },
  //   { src: 'pic8.jpg', alt: 'pic8' },
];
function Background() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressBar, setProgressBar] = useState(0);
  function changeBackground() {
    setCurrentIndex((prevIndex) => prevIndex + 1) % backgrounds.length;
    setProgressBar(0);
  }
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgressBar(((prev) => prev + 1) % 101);
    }, 50);

    return () => clearInterval(progressInterval);
  }, []);
  useEffect(() => {
    if (progressBar === 100) {
      changeBackground();
    }
  }, [progressBar]);

  return (
    <BackgroundContainer style={{ backgroundImage: backgrounds[currentIndex] }}>
      {
        <ProgressBarContainer>
          <ProgressBarIcon progress={progressBar} />
          {backgrounds[1].src}
        </ProgressBarContainer>
      }
    </BackgroundContainer>
  );
}

export default Background;
