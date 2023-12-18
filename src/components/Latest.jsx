import styled, { css } from 'styled-components';
import {
  HiArrowRight,
  HiChevronLeft,
  HiChevronRight,
  HiMiniPlay,
} from 'react-icons/hi2';
import { useRef } from 'react';

const Ul = styled.ul`
  max-width: 120rem;
  margin: 8rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 6rem;
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
  justify-content: flex-start;
  align-items: center;
  gap: 5rem;
  margin: 8rem;
  min-width: 0;
  overflow-x: scroll;
  white-space: nowrap;
  transition: transform 0.5s ease-in-out;
`;

const VideoContent = styled.div`
  min-width: 38rem;
  height: 55rem;
  flex: 0 0 auto;
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

  const scrollContainerRef = useRef(null);

  function scrollLeft() {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 400;
    }
  }

  function scrollRight() {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 400;
    }
  }

  return (
    <>
      <Ul>
        <Li>
          <span>Latest Video</span> <HiArrowRight size={30} color="#1864ab" />
        </Li>
        <Li>
          <Span onClick={scrollLeft}>
            <HiChevronLeft color="#fff" size={30} />
          </Span>
          <Span onClick={scrollRight}>
            <HiChevronRight color="#fff" size={30} />
          </Span>
        </Li>
      </Ul>
      <VideosContainer ref={scrollContainerRef}>
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
      </VideosContainer>
    </>
  );
}

export default Latest;
