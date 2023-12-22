import styled from 'styled-components';
import Nav from '../components/Nav';
import HeroSection from '../components/HeroSection';
import Advert from '../components/Advert';
import MyNewLatest from '../components/MyNewLatest';

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

      <MyNewLatest />
    </>
  );
}

export default IndexPage;
