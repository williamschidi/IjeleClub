import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const Progress = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 5px;
  background-color: #1971c2;
  transition: width 0.05s ease-in-out;
  opacity: 1;
  ${(props) =>
    props.width &&
    css`
      width: ${props.width}%;
    `}
`;

function ProgressBar({ imageInd = null }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(0);
  }, [setProgress, imageInd]);

  useEffect(() => {
    const duration = 5000;
    const interval = 50;
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
  }, [setProgress]);

  return <>{progress < 100 && <Progress width={progress}></Progress>}</>;
}

export default ProgressBar;
