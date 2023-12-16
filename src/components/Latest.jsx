import styled, { css } from 'styled-components';
import {
  HiArrowRight,
  HiChevronLeft,
  HiChevronRight,
  HiMiniPlay,
} from 'react-icons/hi2';

const LatestContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  width: 120rem;
  margin: 8rem auto;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const Li = styled.li`
  font-size: 5rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: #1864ab;
`;

const Span = styled.span`
  background: #1864ab;
  width: 6rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const VideosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

const VideoContent = styled.div`
  width: 38rem;
  height: 55rem;
  display: flex;
  flex-direction: column;
`;

const ImgContainer = styled.div`
  background: #e9ecef;
  position: relative;
  box-shadow: 0 3px 10px #ccc;
`;

const Img = styled.img`
  width: 100%;
  height: 38rem;
`;

const PlayBtnContainer = styled.div`
  width: 5rem;
  height: 5rem;
  background: #1864ab;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 2rem;
  left: 2rem;
`;

const H2 = styled.h2`
  font-size: 2.4rem;
  color: #1864ab;
  padding: 3rem 0;
`;

const LatestFooter = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
  padding-top: 2rem;
`;

const FooterSpan = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
  ${(props) =>
    props.type === 'text' &&
    css`
      color: #1864ab;
      letter-spacing: 1.3px;
    `}
`;

function Latest() {
  return (
    <LatestContainer>
      <Ul>
        <Li>
          <span>Latest Video</span> <HiArrowRight size={30} color="#1864ab" />
        </Li>
        <Li>
          <Span>
            <HiChevronLeft color="#fff" size={30} />
          </Span>
          <Span>
            <HiChevronRight color="#fff" size={30} />
          </Span>
        </Li>
      </Ul>
      <VideosContainer>
        <VideoContent>
          <ImgContainer>
            <Img src="image6.jpg" alt="latest video" />
            <PlayBtnContainer>
              <HiMiniPlay size={30} color="#fff" />
            </PlayBtnContainer>
          </ImgContainer>
          <H2>Highlights: Arsenal 4-1 Chelsea </H2>
          <LatestFooter>
            <FooterSpan type="text">Video</FooterSpan>
            <FooterSpan type="date">11 Dec 23</FooterSpan>
          </LatestFooter>
        </VideoContent>

        <VideoContent>
          <ImgContainer>
            <Img src="image6.jpg" alt="latest video" />
            <PlayBtnContainer>
              <HiMiniPlay size={30} color="#fff" />
            </PlayBtnContainer>
          </ImgContainer>
          <H2>Highlights: Arsenal 4-1 Chelsea </H2>
          <LatestFooter>
            <FooterSpan type="text">Video</FooterSpan>
            <FooterSpan type="date">11 Dec 23</FooterSpan>
          </LatestFooter>
        </VideoContent>

        <VideoContent>
          <ImgContainer>
            <Img src="image6.jpg" alt="latest video" />
            <PlayBtnContainer>
              <HiMiniPlay size={30} color="#fff" />
            </PlayBtnContainer>
          </ImgContainer>
          <H2>Highlights: Arsenal 4-1 Chelsea </H2>
          <LatestFooter>
            <FooterSpan type="text">Video</FooterSpan>
            <FooterSpan type="date">11 Dec 23</FooterSpan>
          </LatestFooter>
        </VideoContent>

        {/* <VideoContent>
          <ImgContainer>
            <Img src="image6.jpg" alt="latest video" />
            <PlayBtnContainer>
              <HiMiniPlay size={30} color="#fff" />
            </PlayBtnContainer>
          </ImgContainer>
          <H2>Highlights: Arsenal 4-1 Chelsea </H2>
          <LatestFooter>
            <FooterSpan type="text">Video</FooterSpan>
            <FooterSpan type="date">11 Dec 23</FooterSpan>
          </LatestFooter>
        </VideoContent> */}
      </VideosContainer>
    </LatestContainer>
  );
}

export default Latest;
