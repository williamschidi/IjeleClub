import styled, { css } from 'styled-components';
import { HiArrowLeft, HiOutlineInformationCircle } from 'react-icons/hi2';

const AdvertSection = styled.div`
  position: relative;
  max-width: 110rem;
  padding: 1rem 0;
  background: var(--advertBackground-color);
  margin: 3rem auto 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 600px) {
    max-width: 90%;
    margin: 1.6rem auto;
  }

  @media screen and (min-width: 601px) and(max-width: 1000px) {
    max-width: 90%;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;
const ButtonPrimary = styled.button`
  ${(props) =>
    props.type === 'primary' &&
    css`
      background: var(--primary-color);
      color: var(--white-color);
    `}

  ${(props) =>
    props.type === 'secondary' &&
    css`
      background: var(--white-color);
      color: var(--intermediate-color);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
    `}
  font-size: 1.6rem;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;

  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.26) !important;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    font-size: 1.4rem;
    padding: 0.8rem;
  }
`;

const H1 = styled.h1`
  font-weight: 400;
  font-size: 1.6rem;
  color: var(--intermediate-color);
  font-family: 'Arial', sans-serif;
  @media screen and (max-width: 600px) {
    font-size: 1.4rem;
  }
`;
const Span = styled.span`
  font-size: 3rem;
  font-weight: bold;

  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

const SpanArrow = styled.span`
  position: absolute;
  top: 0.5rem;
  left: 0.8rem;
`;

function Advert() {
  return (
    <AdvertSection>
      <SpanArrow>
        <HiArrowLeft
          size={15}
          color="var(--intermediate-tint-color)"
          fontWeight="bold"
        />
      </SpanArrow>
      <H1>
        Ads by <Span>Google</Span>
      </H1>
      <ButtonContainer>
        <ButtonPrimary type="primary">Stop Seeing this ad</ButtonPrimary>
        <ButtonPrimary type="secondary">
          <span> Why this ad?</span> <HiOutlineInformationCircle size={20} />
        </ButtonPrimary>
      </ButtonContainer>
    </AdvertSection>
  );
}

export default Advert;
