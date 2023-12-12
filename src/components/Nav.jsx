import styled from 'styled-components';

import CollapseNav from './CollapseNav';
import MyLogo from './MyLogo';
import Search from './Search';

const NavStyled = styled.div`
  height: var(--navigation-height, 20%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 6rem;
`;

const RightSide = styled.ul`
  list-style: none;
  display: flex;
  gap: 5rem;
`;

function Nav() {
  return (
    <NavStyled>
      <div>
        <MyLogo />
      </div>
      <RightSide>
        <Search />
        <CollapseNav />
      </RightSide>
    </NavStyled>
  );
}

export default Nav;
