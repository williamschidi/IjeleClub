import styled from 'styled-components';
import Nav from '../components/Nav';
import HeroSection from '../components/HeroSection';
import Advert from '../components/Advert';
// import MyNewLatest from '../components/MyNewLatest';
import TabComponent from '../components/TabComponent';
import LatestNew from '../components/LatestNew';
import { images, images1 } from '../components/imgArrays';

const StyledIndexPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const imageArr = images.map((img) => img.image);
const subheading = images.map((img) => img.subheading);
const type = images.map((img) => img.type);
const date = images.map((img) => img.date);

const imageArr1 = images1.map((img) => img.image);
const subheading1 = images1.map((img) => img.subheading);
const type1 = images1.map((img) => img.type);
const date1 = images1.map((img) => img.date);

function IndexPage() {
  return (
    <>
      <StyledIndexPage>
        <Nav />
        <HeroSection />
      </StyledIndexPage>

      <Advert />

      <LatestNew
        images={imageArr}
        heading="Latest Video"
        subheading={subheading}
        date={date}
        type={type}
        color="#001489"
        background="#fff"
      />
      <Advert />
      <TabComponent />
      <LatestNew
        images={imageArr1}
        heading="Interview"
        subheading={subheading1}
        date={date1}
        type={type1}
        background="#001489;"
        color="#fff"
      />
    </>
  );
}

export default IndexPage;
