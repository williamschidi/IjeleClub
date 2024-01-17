import SwiperCore from 'swiper';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useMediaQuery } from 'react-responsive';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

import styled, { css } from 'styled-components';
import { HiArrowRight } from 'react-icons/hi2';

const MainContainer = styled.div`
  background: ${(props) => props.background};
`;
const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;

  color: ${(props) => props.color};
`;

const H1 = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  padding: 6rem 0 4rem;
`;
const SwiperStyled = styled(Swiper)`
  height: 45rem;
  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    top: 20%;
    transform: translateY(50%);
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    color: ${(props) => props.color};
    background: #fff;
    border-radius: 100px;
  }
  .swiper-button-next {
    right: 1rem;
  }
  .swiper-button-prev {
    left: 1rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  height: 45rem;
  transition: transform 1s ease-in-out;
  cursor: pointer;
`;

const Img = styled.img`
  position: relative;
  width: 100%;
  height: 22rem;
  transition: transform 0.5s ease-in-out;
  ${Cards}:hover & {
    transform: scale(1.03);
  }

  @media screen and (max-width: 600px) {
    height: 18rem;
    width: 100%;
  }
`;

const Div = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  padding: 3rem 2rem 6rem;
  height: 10rem;
  width: 100%;
  @media screen and (max-width: 600px) {
    padding: 3rem 0 6rem;
  }
`;

const H2 = styled.h2`
  font-size: 1.9rem;
  color: inherit;

  @media screen and (max-width: 600px) {
    font-size: 1.6rem;
  }
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
      color: inherit;
      letter-spacing: 1.3px;
    `}
  @media screen and (max-width:1200px) {
    font-size: 1.3rem;
  }
`;

function MySwiper({
  images,
  subheading,
  type,
  date,
  heading,
  color,
  background,
}) {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  return (
    <MainContainer background={background}>
      <Container color={color}>
        <H1>
          {heading} <HiArrowRight size={isMobile ? 20 : 30} color={color} />
        </H1>
        <SwiperStyled
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          speed={1000}
          spaceBetween={10}
          slidesPerView={isMobile ? 1 : 3}
          pagination={{ clickable: true }}
          threshold={5}
        >
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>

          {images.map((img, ind) => (
            <SwiperSlide key={ind}>
              <Cards>
                <Img src={img} alt={img} />
                <Div>
                  <H2>{subheading.at(ind)}</H2>

                  <LatestFooter>
                    <FooterSpan type="text">{type.at(ind)}</FooterSpan>

                    <FooterSpan type="date">{date.at(ind)}</FooterSpan>
                  </LatestFooter>
                </Div>
              </Cards>
            </SwiperSlide>
          ))}
        </SwiperStyled>
      </Container>
    </MainContainer>
  );
}

export default MySwiper;
