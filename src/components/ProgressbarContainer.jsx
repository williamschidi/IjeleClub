import { useState } from 'react';
import ProgressBar from './ProgressBar';
import styled, { css } from 'styled-components';
import { indexImages as images } from './imgArrays';
import { NavLink } from 'react-router-dom';

const MatchNew = styled(NavLink)`
  position: absolute;
  bottom: 1rem;
  right: 65%;
  max-width: 38rem;
  height: 10rem;
  border-right: 1px solid #868e96;
  text-decoration: none;
  background: #ced4da;
  cursor: pointer;
  /* z-index: 5 */
  ${(props) =>
    props.ind === props.imageInd &&
    css`
      background: #fff;
    `}
  ${(props) =>
    props.ind &&
    css`
      transform: translateX(${100 * props.ind}%);
    `};
`;

const Text = styled.p`
  font-size: 1.8rem;
  color: #001489;
  padding: 1.4rem 2rem;
  font-weight: bold;
  line-height: 1.4;
  text-decoration: none;
`;

function ProgressbarContainer({ imageInd }) {
  const [progress, setProgress] = useState(0);
  return (
    <>
      {images.map((_, ind) => (
        <MatchNew
          to={`heroSectionDetailPage${ind + 1}`}
          ind={ind}
          key={ind}
          imageInd={imageInd}
        >
          <Text>{images[ind].text}</Text>
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
