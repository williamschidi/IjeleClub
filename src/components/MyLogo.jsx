import styled from 'styled-components';

const LogoContainer = styled.div`
  width: 8rem;
  height: 8rem;
`;

const MyImage = styled.img`
  width: 100%;
`;

function MyLogo() {
  return (
    <LogoContainer>
      <MyImage src="logo.jpg" alt="Ijele fc" />
    </LogoContainer>
  );
}

export default MyLogo;
