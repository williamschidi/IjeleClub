import styled from 'styled-components';

const Section2 = styled.div`
  position: absolute;
  bottom: 0;
  height: var(--navigation-height, 15%);
  width: 135rem;
  background: #fff;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  list-style: none;
  height: 100%;
`;
const Li = styled.li`
  width: 50%;
  margin: 50% auto;
  text-align: center;
  color: #1864ab;
  font-size: 2.5rem;
  font-weight: bold;

  /* background: blue; */
`;

function ModalSection2() {
  return (
    <Section2>
      <Ul>
        <Li>
          <navLink>Login</navLink>
        </Li>
        <Li>Register</Li>
      </Ul>
    </Section2>
  );
}

export default ModalSection2;
