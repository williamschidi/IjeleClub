import styled from 'styled-components';
import CloseBtn from './CloseBtn';

const Section1 = styled.div`
  flex: 1;
  background: linear-gradient(to right, #1971c2, #ffa94d);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const Ul = styled.ul`
  padding: 5rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  list-style: none;
  font-size: 3rem;
  font-weight: 500;
`;

const Li = styled.li`
  color: #fff;
  padding: 1rem 2rem;
`;

function ModalSection1() {
  return (
    <Section1>
      <CloseBtn>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#fff"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </CloseBtn>
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
    </Section1>
  );
}

export default ModalSection1;
