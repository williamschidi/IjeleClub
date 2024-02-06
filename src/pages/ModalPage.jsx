import { HiMiniXMark } from 'react-icons/hi2';
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
`;
const Li = styled.li`
  list-style: none;
`;

function ModalPage({ toggleModal }) {
  return (
    <Container onClick={toggleModal}>
      <CloseIcon size={80} color="var(--white-color)" />

      <Ul>
        <Li>Latest</Li>
        <Li>Watch</Li>
        <Li>Men Team</Li>
        <Li>Women Team</Li>
        <Li>Ticket & Hospitality</Li>
        <Li>Shop</Li>
        <Li>About the club</Li>
        <Li>Fans</Li>
        <Li>Contact Us</Li>
      </Ul>
    </Container>
  );
}

export default ModalPage;
