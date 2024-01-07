import styled from 'styled-components';
import CollapseNav from './CollapseNav';
import MyLogo from './MyLogo';
import Search from './Search';
import NavCenter from './NavCenter';
import { useMediaQuery } from 'react-responsive';

const NavStyled = styled.div`
  height: 12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  border-top: 5px solid var(--primary-color);
  @media screen and (max-width: 1200px) {
    height: 9rem;
  }
`;

const RightSide = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

function Nav() {
  const tablet = useMediaQuery({ minWidth: 1200 });
  console.log(tablet);
  return (
    <NavStyled>
      <div>
        <MyLogo />
      </div>
      {tablet ? <NavCenter /> : null}
      <RightSide>
        <Search />
        <CollapseNav />
      </RightSide>
    </NavStyled>
  );
}

export default Nav;
