import styled from 'styled-components';
import Nav from '../components/Nav';
import HeroSection from '../components/HeroSection';
import Advert from '../components/Advert';
import Latest from '../components/Latest';

const StyledIndexPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function IndexPage() {
  return (
    <>
      <StyledIndexPage>
        <Nav />
        <HeroSection />
      </StyledIndexPage>

      <Advert />
      <Latest />
    </>
  );
}

export default IndexPage;
