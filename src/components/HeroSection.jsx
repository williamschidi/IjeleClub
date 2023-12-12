import styled from 'styled-components';

const StyledHeroSection = styled.div`
  /* height: calc(100%-var(--navigation-height)); */
  /* height: 10rem; */
  flex: 1;
  overflow-y: auto;
  background: blue;
`;

function HeroSection() {
  return <StyledHeroSection></StyledHeroSection>;
}

export default HeroSection;
