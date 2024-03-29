import Nav from '../components/Nav';
import HeroSection from '../components/HeroSection';
import Advert from '../components/Advert';
import { images, images1, images2 } from '../components/imgArrays';
import ProfileSection from '../components/ProfileSection';
import Sponsor from '../components/Sponsor';
import Footer from '../components/Footer';
import { useMediaQuery } from 'react-responsive';
import styled, { css } from 'styled-components';
import MySwiper from '../components/MySwiper';
import TabComponents from '../components/TabComponents';
import ModalPage from './ModalPage';
import { useState } from 'react';

const imageArr = images.map((img) => img.image);
const subheading = images.map((img) => img.subheading);
const type = images.map((img) => img.type);
const date = images.map((img) => img.date);

const imageArr1 = images1.map((img) => img.image);
const subheading1 = images1.map((img) => img.subheading);
const type1 = images1.map((img) => img.type);
const date1 = images1.map((img) => img.date);

const imageArr2 = images2.map((img) => img.image);
const subheading2 = images2.map((img) => img.subheading);
const type2 = images2.map((img) => img.type);
const date2 = images2.map((img) => img.date);

const Container = styled.div`
  ${(props) =>
    props.isMobile &&
    css`
      max-width: 60rem;
      width: 100%;
      margin: 0 auto;
    `}
`;

function IndexPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 600 });

  function toggleIsModalOpen() {
    setIsModalOpen((isOpen) => !isOpen);
  }
  return (
    <Container isMobile={isMobile}>
      {isModalOpen ? (
        <ModalPage toggleModal={toggleIsModalOpen} />
      ) : (
        <>
          <Nav toggleModal={toggleIsModalOpen} />
          <HeroSection />
          <Advert />
          <MySwiper
            images={imageArr}
            heading="Latest Video"
            subheading={subheading}
            date={date}
            type={type}
            color="var(--primary-color)"
            background="var(--white-color)"
          />

          <Advert />
          <TabComponents />
          <MySwiper
            images={imageArr1}
            heading="Interview"
            subheading={subheading1}
            date={date1}
            type={type1}
            background="var(--primary-color)"
            color="var(--white-color)"
          />

          <MySwiper
            heading="Latest News"
            color="var(--primary-color)"
            background="var(--white-color)"
            images={imageArr2}
            subheading={subheading2}
            date={date2}
            type={type2}
          />

          <ProfileSection />
          <Sponsor />
          <Footer />
        </>
      )}
    </Container>
  );
}

export default IndexPage;
