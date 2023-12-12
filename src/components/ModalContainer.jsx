import styled from 'styled-components';
import ModalSection1 from './ModalSection1';
import ModalSection2 from './ModalSection2';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  margin-right: calc(-1 * [scrollbar-width]);
  /* overflow-y: scroll; */
`;

function ModalContainer() {
  return (
    <SectionContainer>
      <ModalSection1 />
      <ModalSection2 />
    </SectionContainer>
  );
}

export default ModalContainer;
