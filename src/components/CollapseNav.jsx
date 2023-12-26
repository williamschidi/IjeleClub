import styled from 'styled-components';
import { HiBars3 } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';

const NavButton = styled.button`
  width: 12rem;
  height: 12rem;
  border: none;
  background: transparent;
  cursor: pointer;
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #001489;
`;
const H4 = styled.div`
  font-weight: bold;
  font-size: 1.4rem;
  color: #fff;
`;

function CollapseNav() {
  return (
    <NavButton>
      <NavLink to="#">
        <HiBars3 size={30} color="#fff" />
        <H4>MORE</H4>
      </NavLink>
    </NavButton>
  );
}

export default CollapseNav;
