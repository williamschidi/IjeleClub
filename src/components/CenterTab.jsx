import styled from 'styled-components';

const CenterTabs = styled.div`
  width: 60rem;
  height: 7.5rem;
  background: #e9ecef;
  position: absolute;
  top: 0;
  right: 50%;
  transform: translate(50%, -50%);
  border-radius: 15rem;

  @media screen and (max-width: 600px) {
    width: 30rem;
    border-radius: 10rem;
    height: 5rem;
  }
  @media screen and (min-width: 601px) and(max-width: 1200px) {
    width: 50rem;
    height: 6.5rem;
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Li = styled.li`
  list-style: none;
  text-align: center;
  width: 19rem;
  padding: 2rem 6rem;
  border-radius: 5rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--primary-color);
  text-transform: uppercase;
  cursor: pointer;
  &.active {
    background: var(--white-color);
  }
  @media screen and (max-width: 600px) {
    width: 9.4rem;
    font-size: 1.1rem;
    padding: 1.2rem 2.4rem;
  }

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    width: 15rem;
    font-size: 1.4rem;
  }
`;

function CenterTab({ activeTab, setActiveTab }) {
  function handleTabClick(tab) {
    setActiveTab(() => tab);
  }

  return (
    <CenterTabs>
      <Ul>
        <Li
          className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab1')}
        >
          Men
        </Li>
        <Li
          className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab2')}
        >
          Women
        </Li>
        <Li
          className={`tab ${activeTab === 'tab3' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab3')}
        >
          Academy
        </Li>
      </Ul>
    </CenterTabs>
  );
}

export default CenterTab;
