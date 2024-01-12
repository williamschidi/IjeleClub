import { HiArrowRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

const ListNav = styled.ul`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 6rem 0 4rem 0;

  @media screen and (max-width: 1214px) {
    max-width: 110rem;
    padding: 6rem 0 4rem;
  }

  @media screen and (max-width: 1100px) {
    max-width: 100rem;
    padding: 5rem 0 3rem;
  }
  @media screen and (max-width: 1000px) {
    max-width: 90rem;
    padding: 4rem 0 2rem;
  }
`;

const ListNavLi = styled.li`
  font-size: 4rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: inherit;
  @media screen and (max-width: 600px) {
    font-size: 2rem;
    gap: 1.8rem;
  }
  @media screen and (min-width: 601px) and(max-width: 1214px) {
    font-size: 3.5rem;
    gap: 1rem;
  }
`;

const Button = styled.button`
  background: var(--secondary-color);
  width: 6rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  /* @media screen and (max-width) {
    width: 5rem;
    height: 5rem;
  } */
`;

function LatestHeading({
  heading,
  nextSlide,
  maxSlide,
  curSlide,
  prevSlide,
  color,
}) {
  const mobile = useMediaQuery({ maxWidth: 600 });
  return (
    <ListNav>
      <ListNavLi>
        <span>{heading}</span>
        <HiArrowRight size={mobile ? 20 : 30} color={color} />
      </ListNavLi>
      {!mobile && (
        <ListNavLi>
          <Button onClick={nextSlide} disabled={maxSlide - curSlide <= 3}>
            <HiChevronLeft color="var(--white-color)" size={30} />
          </Button>
          <Button onClick={prevSlide} disabled={curSlide < 1}>
            <HiChevronRight color="var(--white-color)" size={30} />
          </Button>
        </ListNavLi>
      )}
    </ListNav>
  );
}

export default LatestHeading;
