import styled from 'styled-components';
import { HiBars3 } from 'react-icons/hi2';
import { useMediaQuery } from 'react-responsive';

const NavButton = styled.button`
  width: 12rem;
  height: 12rem;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background: var(--primary-color);

  @media screen and (max-width: 600px) {
    background: transparent;
    width: 8rem;
    height: 8rem;
    padding: 0 1rem 0 0;
  }

  @media screen and (min-width: 601px) and(max-width: 1200px) {
    background: transparent;
  }
`;
const H4 = styled.div`
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 2px;
  color: var(--white-color);
`;

function CollapseNav({ toggleModal }) {
  const smallLaptop = useMediaQuery({ minWidth: 1201 });
  const mobile = useMediaQuery({ maxWidth: 600 });

  return (
    <NavButton onClick={toggleModal}>
      <HiBars3
        size={mobile ? 20 : 30}
        color={
          smallLaptop ? 'var(--white-color)' : 'var(--intermediate-shade-color)'
        }
      />
      {smallLaptop && <H4>MORE</H4>}
    </NavButton>
  );
}

export default CollapseNav;
