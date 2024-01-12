import styled from 'styled-components';

const LogoContainer = styled.div`
  width: 12rem;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    width: 6rem;
    height: 6rem;
  }
  @media screen and (min-width: 601) and(max-width: 1150px) {
    width: 9rem;
    height: 9rem;
  }
  /* padding: 2rem 4rem; */
`;

const MyImage = styled.img`
  width: 90%;
`;

function MyLogo() {
  return (
    <LogoContainer>
      <MyImage src="logo.jpg" alt="Ijele fc" />
    </LogoContainer>
  );
}

export default MyLogo;
