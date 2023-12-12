import styled from 'styled-components';
import Nav from '../components/Nav';
import HeroSection from '../components/HeroSection';
import ModalContainer from '../components/ModalContainer';

const StyledIndexPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function IndexPage() {
  return (
    <StyledIndexPage>
      {/* <Nav />
      <HeroSection /> */}

      <ModalContainer />
    </StyledIndexPage>
  );
}

export default IndexPage;
