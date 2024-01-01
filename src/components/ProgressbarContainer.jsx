import { useState } from 'react';
import ProgressBar from './ProgressBar';
import styled, { css } from 'styled-components';
import { indexImages as images } from './imgArrays';

const MatchNew = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 65%;
  width: 38rem;
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

function ProgressbarContainer({ imageInd }) {
  const [progress, setProgress] = useState(0);
  return (
    <>
      {images.map((_, ind) => (
        <MatchNew ind={ind} key={ind}>
          {ind === imageInd && (
            <ProgressBar
              key={ind}
              progress={progress}
              setProgress={setProgress}
            />
          )}
        </MatchNew>
      ))}
    </>
  );
}
export default ProgressbarContainer;
