import { useEffect, useRef, useState } from 'react';
import LatestHeading from './LatestHeading';
import Card from './Card';
import styled from 'styled-components';

const Container = styled.div`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  height: 85vh;

  @media screen and (max-width: 600px) {
    max-width: 100%;
    height: 70vh;
    padding: 0 3rem;
  }
`;

function LatestNew({
  images,
  subheading,
  type,
  date,
  heading,
  color,
  background,
}) {
  const [curSlide, setCurSlide] = useState(0);

  const maxSlide = images.length;

  const nextSlide = () => {
    setCurSlide((prevSlide) => prevSlide + 1);
  };

  const prevSlide = () => {
    setCurSlide((prevSlide) => prevSlide - 1);
  };

  const cardRef = useRef(null);

  useEffect(() => {
    const item = cardRef.current.querySelectorAll('.cardContainer');
    Array.from(item).forEach((t) => {
      t.style.padding = `2rem`;
    });
  }, [curSlide]);
  return (
    <Container color={color} background={background}>
      <LatestHeading
        nextSlide={nextSlide}
        curSlide={curSlide}
        prevSlide={prevSlide}
        maxSlide={maxSlide}
        heading={heading}
        color={color}
      />

      <Card
        curSlide={curSlide}
        cardRef={cardRef}
        images={images}
        subheading={subheading}
        type={type}
        date={date}
      />
    </Container>
  );
}

export default LatestNew;
