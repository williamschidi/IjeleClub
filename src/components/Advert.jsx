import styled from 'styled-components';

const AdvertSection = styled.div`
  max-width: 120rem;
  padding: 1.5rem 0;
  /* height: 10rem; */
  background: #f8f9fa;
  margin: 3rem auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;
const ButtonPrimary = styled.button`
  background: ${(props) => (props.primary ? '#4dabf7 ' : '#fff')};
  color: ${(props) => (props.primary ? '#fff' : ' #343a40')};
  font-size: 2.5rem;
  padding: 1.2rem;
  border: none;
  border-radius: 0.7rem;
  box-shadow: 0 2px 3px #ccc;
  cursor: pointer;
  margin-bottom: 1.2;
`;

const H1 = styled.h1`
  font-weight: 400;
  font-size: 3rem;
  color: #adb5bd;
`;
const Span = styled.span`
  color: #343a40;
  font-size: 3rem;
  font-weight: bold;
`;

function Advert() {
  return (
    <AdvertSection>
      <H1>
        Ads by <Span>Google</Span>
      </H1>
      <ButtonContainer>
        <ButtonPrimary primary>Stop Seeing this ad</ButtonPrimary>
        <ButtonPrimary>Why this add ?</ButtonPrimary>
      </ButtonContainer>
    </AdvertSection>
  );
}

export default Advert;
