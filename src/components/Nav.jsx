import styled from 'styled-components';

import CollapseNav from './CollapseNav';
import MyLogo from './MyLogo';
import Search from './Search';
import NavCenter from './NavCenter';

const NavStyled = styled.div`
  height: var(--navigation-height, 20%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 1rem 0 0; */
  gap: 3rem;
  border-top: 5px solid #001489;
`;

const RightSide = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

function Nav() {
  return (
    <NavStyled>
      <div>
        <MyLogo />
      </div>
      <NavCenter />
      <RightSide>
        <Search />
        <CollapseNav />
      </RightSide>
    </NavStyled>
  );
}

export default Nav;
