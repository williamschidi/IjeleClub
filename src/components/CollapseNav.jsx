import styled from 'styled-components';
import { HiBars3 } from 'react-icons/hi2';

const NavButton = styled.li`
  width: 3rem;
  height: 3rem;
  border: none;
  background: transparent;
  cursor: pointer;
`;

function CollapseNav() {
  return (
    <NavButton>
      <HiBars3 size={30} />
    </NavButton>
  );
}

export default CollapseNav;
