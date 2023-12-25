import styled from 'styled-components';
import Nav from '../components/Nav';
import HeroSection from '../components/HeroSection';
import Advert from '../components/Advert';
import MyNewLatest from '../components/MyNewLatest';
import TabComponent from '../components/TabComponent';

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
      <Advert />
      <TabComponent />
    </>
  );
}

export default IndexPage;
