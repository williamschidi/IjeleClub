// import { useContext } from 'react';
import styled, { css } from 'styled-components';

const SliderContainer = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 120rem;
  height: 50rem;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    max-width: 80%;
    gap: 0;
  }
  @media screen and (max-width: 1214px) {
    height: 90%;
    max-width: 110rem;
    gap: 1.2rem;
  }

  @media screen and (max-width: 1100px) {
    max-width: 100rem;
    gap: 1rem;
  }

  @media screen and (max-width: 1000px) {
    max-width: 90rem;
    gap: 0.5rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  width: 37rem;
  height: 45rem;
  justify-content: flex-start;
  align-items: flex-start;
  flex-shrink: 0;
  overflow: hidden;
  transition: transform 1s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  /* transform: translateX(0); */

  ${(props) =>
    props.curSlide !== undefined &&
    props.ind !== undefined &&
    css`
      transform: translateX(${105 * (props.ind - props.curSlide)}%);
    `}

  @media screen and (max-width: 600px) {
    width: 30rem;
    height: 40rem;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 22rem;
  transition: transform 0.7s ease-in-out;
  ${Cards}:hover & {
    transform: scale(1.05);
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

function Card({
  images,
  curSlide,
  cardRef,
  subheading,
  type,
  date,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
}) {
  return (
    <SliderContainer ref={cardRef} className="cardContainer">
      {images.map((img, ind) => (
        <Cards
          key={img}
          curSlide={curSlide}
          ind={ind}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          // translateX={translateX}
        >
          <Img src={img} alt={img} />
          <Div>
            <H2>{subheading.at(ind)}</H2>

            <LatestFooter>
              <FooterSpan type="text">{type.at(ind)}</FooterSpan>

              <FooterSpan type="date">{date.at(ind)}</FooterSpan>
            </LatestFooter>
          </Div>
        </Cards>
      ))}
    </SliderContainer>
  );
}

export default Card;
