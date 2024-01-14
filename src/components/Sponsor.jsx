import styled from 'styled-components';

const SponsorContainer = styled.div`
  height: 65vh;
  background: #fff;
  @media screen and (max-width: 600px) {
    width: 90%;
    height: 50vh;
  }
`;

function Sponsor() {
  return <SponsorContainer></SponsorContainer>;
}

export default Sponsor;
