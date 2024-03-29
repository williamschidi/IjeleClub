import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;

const Li = styled.li`
  color: var(--primary-color);
  font-size: 1.8rem;
  font-weight: bold;
  padding: 4.6rem 2.5rem;
  text-transform: uppercase;
  border-bottom: 0.6rem solid transparent;

  transition: opacity 0.3s ease-in-out, border-botton 0.3s ease-in-out;
  &:hover {
    border-bottom: 0.6rem solid var(--primary-color);
  }
`;

const Nav = styled(NavLink)`
  text-decoration: none;
`;

function NavCenter() {
  return (
    <Ul>
      <Nav to="latest">
        <Li>latest</Li>
      </Nav>
      <Nav to="watch">
        <Li>watch</Li>
      </Nav>
      <Nav to="men">
        <Li>men&apos;s team</Li>
      </Nav>
      <Nav to="women">
        <Li>women&apos;s team</Li>
      </Nav>
      <Nav to="hospitality">
        <Li>ticket & hospitality</Li>
      </Nav>
      <Nav to="shop">
        <Li>shop</Li>
      </Nav>
    </Ul>
  );
}

export default NavCenter;
