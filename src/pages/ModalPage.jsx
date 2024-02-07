import { HiMiniXMark } from 'react-icons/hi2';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  background: var(--primary-color);
`;

const CloseIcon = styled(HiMiniXMark)`
  padding: 1.5rem;
  background: var(--secondary-color);
  position: absolute;
  top: 0;
  right: 0;
  @media screen and (max-width: 600px) {
    padding: 1rem;
  }
`;
const Ul = styled.ul`
  transition: bottom 0.3s ease-in-out;
  padding: 15rem 10rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-decoration: none;
  font-size: 2.4rem;
  font-weight: bold;
  letter-spacing: 1.2px;
  color: var(--white-color);
  @media screen and (max-width: 600px) {
    padding: 10rem 4rem 6rem;
    font-size: 1.8rem;
  }
`;
const Li = styled.li`
  list-style: none;
`;

const Container1 = styled.div`
  background: blue;
`;

const Ul1 = styled.ul`
  padding: 15rem 10rem;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: 1.2px;
  color: var(--white-color);
  @media screen and (max-width: 600px) {
    padding: 6rem 4rem;
    font-size: 1.4rem;
  }
`;
const Li1 = styled.li`
  list-style: none;
`;

function ModalPage({ toggleModal }) {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  return (
    <>
      <Container onClick={toggleModal}>
        <CloseIcon size={isMobile ? 50 : 80} color="var(--white-color)" />

        <Ul>
          <Li>Latest</Li>
          <Li>Watch</Li>
          <Li>Men Team</Li>
          <Li>Women Team</Li>
          <Li>Ticket & Hospitality</Li>
          <Li>Shop</Li>

          <Li>Contact Us</Li>
        </Ul>
      </Container>
      <Container1>
        <Ul1>
          <Li1>About the club</Li1>
          <Li1>Supporter Relation and Fan </Li1>
          <Li1>Advisory Board</Li1>
          <Li1>Our History</Li1>
          <Li1>Stamford Bridge</Li1>
          <Li1>Community</Li1>
          <Li1>Fans</Li1>
          <Li1>Our Venues</Li1>
        </Ul1>
      </Container1>
    </>
  );
}

export default ModalPage;
