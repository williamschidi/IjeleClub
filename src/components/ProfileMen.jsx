import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 33rem;
  height: 40rem;
  background: linear-gradient(to right, #fff 50%, #f59f00 50%);
  background-size: 200% 100%;
  transition: background-position 0.5s ease;
  &:hover {
    background-position: 40% 0;
  }
`;

const Span = styled.span`
  writing-mode: vertical-lr;
  font-size: 7rem;
  text-transform: uppercase;
  padding: 4rem 1rem;
  color: transparent;
  -webkit-text-stroke: 1px #001489;
  text-shadow: 3px 1px #001489;
`;

const Img = styled.img`
  max-width: 50%;
  max-height: 80%;
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(50%, 50%);
`;
// const Img = styled.img`width: 50%;`

function ProfileMen() {
  return (
    <Container>
      <Span>Men</Span>

      <Img
        src="https://img.chelseafc.com/image/upload/f_auto,h_53…ple/first-team/2023-24/Sterling_AP_Home_23_24.png"
        alt="img"
      />
    </Container>
  );
}

export default ProfileMen;
