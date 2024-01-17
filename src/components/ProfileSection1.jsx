import { Swiper, SwiperSlide } from 'swiper/react';
import ProfileMen from './ProfileMen';
import ProfileWomen from './ProfileWomen';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

const Container = styled.div`
  background: var(--primary-color);
`;

const SwiperStyled = styled(Swiper)`
  max-width: 80rem;
  padding: 5rem;
  /* margin: 0 auto; */
`;

function ProfileSection1() {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  return (
    <Container>
      <SwiperStyled
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        speed={1000}
        spaceBetween={isMobile ? 15 : 100}
        slidesPerView={isMobile ? 1 : 2}
        pagination={{ clickable: true }}
        threshold={5}
      >
        <SwiperSlide>
          <ProfileMen />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileWomen />
        </SwiperSlide>
      </SwiperStyled>
    </Container>
  );
}

export default ProfileSection1;
