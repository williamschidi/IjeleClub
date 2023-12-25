import styled, { css } from 'styled-components';
import { HiArrowLeft, HiOutlineInformationCircle } from 'react-icons/hi2';

const AdvertSection = styled.div`
  position: relative;
  max-width: 110rem;
  padding: 1rem 0;
  background: #f8f9fa;
  margin: 3rem auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
      background: #1c7ed6;
      color: #fff;
    `}

  ${(props) =>
    props.type === 'secondary' &&
    css`
      background: #fff;
      color: #9e9ea6;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
    `}
  font-size: 1.6rem;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  /* box-shadow: 0 3px 4px #ccc; */
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.26) !important;
  cursor: pointer;
`;

const H1 = styled.h1`
  font-weight: 400;
  font-size: 1.6rem;
  color: #9e9ea6;
  font-family: 'Arial', sans-serif;
`;
const Span = styled.span`
  font-size: 3rem;
  font-weight: bold;
`;

const SpanArrow = styled.span`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
`;

function Advert() {
  return (
    <AdvertSection>
      <SpanArrow>
        <HiArrowLeft size={15} color="#868e96" fontWeight="bold" />
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
