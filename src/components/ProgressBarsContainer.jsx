import ProgressBar from './ProgressBar';
import styled, { css } from 'styled-components';
import { indexImages as images } from './imgArrays';
import { NavLink } from 'react-router-dom';

const Container = styled.ol`
  max-width: 120rem;
  height: 10rem;
  background: #ced4da;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  z-index: 10;
  @media screen and (max-width: 1200px) {
    height: 5px;
  }
`;
const MatchNew = styled(NavLink)`
  max-width: 33.33%;
  height: 10rem;
  border-right: 1px solid #868e96;
  text-decoration: none;
  ${(props) =>
    props.ind === props.imageInd &&
    css`
      background: #fff;
      position: relative;
    `}
  @media screen and (max-width:1200px) {
    border: none;
    background: transparent;
    height: 5px;
  }
`;
const ProgressBarContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const Text = styled.p`
  font-size: 1.8rem;
  color: #001489;
  padding: 1.4rem 2rem;
  font-weight: bold;
  line-height: 1.4;
  text-decoration: none;

  @media screen and (max-width: 1200px) {
    opacity: 0;
  }
`;

function ProgressbarContainer({ imageInd }) {
  return (
    <Container>
      {images.map((_, ind) => (
        <MatchNew
          to={`heroSectionDetailPage${ind + 1}`}
          ind={ind}
          key={ind}
          imageInd={imageInd}
        >
          <Text>{images[ind].text}</Text>
          {ind === imageInd && (
            <ProgressBarContainer>
              <ProgressBar />
            </ProgressBarContainer>
          )}
        </MatchNew>
      ))}
    </Container>
  );
}
export default ProgressbarContainer;
