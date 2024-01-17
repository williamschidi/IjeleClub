import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 90%;
  height: 70vh;
  background: linear-gradient(
    to right,
    var(--white-color) 50%,
    var(--SpecialCase-color) 50%
  );
  background-size: 200% 100%;
  transition: background-position 0.5s ease;
  &:hover {
    background-position: 40% 0;
  }
  @media screen and (max-width: 600px) {
    height: 60vh;
  }
`;

const Span = styled.span`
  writing-mode: vertical-lr;
  font-size: 7rem;
  text-transform: uppercase;
  padding: 4rem 1rem;
  color: transparent;
  -webkit-text-stroke: 1px var(--primary-color);
  text-shadow: 3px 1px var(--primary-color);

  @media screen and (max-width: 600px) {
    font-size: 5rem;
    padding: 2rem 0.7rem;
  }
`;

const ImgDiv = styled.div`
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

function ProfileWomen() {
  return (
    <Container>
      <Span>Women</Span>
      <ImgDiv>
        <img src="#" alt="img" />
      </ImgDiv>
    </Container>
  );
}

export default ProfileWomen;
