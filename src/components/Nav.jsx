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

  @media screen and (max-width: 600px) {
    max-width: 60rem;
    height: 8rem;
    gap: 1rem;
    padding: 0 0.5rem 0 1rem;
  }
  @media screen and (min-width: 601px) and (max-width: 1200px) {
    gap: 4rem;
    height: 9rem;
  }
`;

const RightSide = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  @media screen and (max-width: 600px) {
    gap: 0.8rem;
    justify-content: space-between;
  }
  @media screen and (min-width: 601px) and (max-width: 1000px) {
    gap: 1rem;
  }

  @media screen and (max-width: 600px) {
    gap: 0.7rem;
  }
`;

function Nav() {
  const tablet = useMediaQuery({ minWidth: 1200 });

  return (
    <NavStyled>
      <MyLogo />

      {tablet ? <NavCenter /> : null}
      <RightSide>
        <Search />
        <CollapseNav />
      </RightSide>
    </NavStyled>
  );
}

export default Nav;
