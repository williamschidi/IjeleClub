import styled from 'styled-components';
import { HiArrowRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const LatestContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 120rem;
  margin: 8rem auto;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

// const VideoContent = styled.div`
//   display: flex;
// `;

const Li = styled.li`
  font-size: 5rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: #1864ab;
`;

const Span = styled.span`
  background: #1864ab;
  width: 6rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Latest() {
  return (
    <LatestContainer>
      <Ul>
        <Li>
          <span>Latest Video</span> <HiArrowRight size={30} color="#1864ab" />
        </Li>
        <Li>
          <Span>
            <HiChevronLeft color="#fff" size={30} />
          </Span>
          <Span>
            <HiChevronRight color="#fff" size={30} />
          </Span>
        </Li>
      </Ul>
    </LatestContainer>
  );
}

export default Latest;
