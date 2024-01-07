import Nav from '../components/Nav';
import HeroSection from '../components/HeroSection';
import Advert from '../components/Advert';
import TabComponent from '../components/TabComponent';
import LatestNew from '../components/LatestNew';
import { images, images1, images2 } from '../components/imgArrays';
import ProfileSection from '../components/ProfileSection';
import Sponsor from '../components/Sponsor';
import Footer from '../components/Footer';

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

function IndexPage() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Advert />
      <LatestNew
        images={imageArr}
        heading="Latest Video"
        subheading={subheading}
        date={date}
        type={type}
        color="var(--primary-color)"
        background="var(--white-color)"
      />
      <Advert />
      <TabComponent />
      <LatestNew
        images={imageArr1}
        heading="Interview"
        subheading={subheading1}
        date={date1}
        type={type1}
        background="var(--primary-color)"
        color="var(--white-color)"
      />
      <LatestNew
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
  );
}

export default IndexPage;
