import { HiArrowRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import styled from 'styled-components';

const ListNav = styled.ul`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 8rem 0 4rem 0;
`;

const ListNavLi = styled.li`
  font-size: 4rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: inherit;
`;

const Button = styled.button`
  background: #1864ab;
  width: 6rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
`;

function LatestHeading({
  heading,
  nextSlide,
  maxSlide,
  curSlide,
  prevSlide,
  color,
}) {
  return (
    <ListNav>
      <ListNavLi>
        <span>{heading}</span> <HiArrowRight size={30} color={color} />
      </ListNavLi>
      <ListNavLi>
        <Button onClick={nextSlide} disabled={maxSlide - curSlide <= 3}>
          <HiChevronLeft color="#fff" size={30} />
        </Button>
        <Button onClick={prevSlide} disabled={curSlide < 1}>
          <HiChevronRight color="#fff" size={30} />
        </Button>
      </ListNavLi>
    </ListNav>
  );
}

export default LatestHeading;
