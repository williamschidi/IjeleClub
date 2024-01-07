import styled from 'styled-components';
import { HiBars3 } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
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
  background: var(--primary-color);

  @media screen and (max-width: 1200px) {
    background: transparent;
  }
`;
const H4 = styled.div`
  font-weight: bold;
  font-size: 1.4rem;
  color: var(--white-color);
`;

function CollapseNav() {
  const smallLaptop = useMediaQuery({ minWidth: 1201 });
  return (
    <NavButton>
      <NavLink to="#">
        <HiBars3
          size={30}
          color={
            smallLaptop
              ? 'var(--white-color)'
              : 'var(--intermediate-shade-color)'
          }
        />
        {smallLaptop && <H4>MORE</H4>}
      </NavLink>
    </NavButton>
  );
}

export default CollapseNav;
