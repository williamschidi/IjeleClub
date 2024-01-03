import styled from 'styled-components';
import { HiArrowRight } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
import {
  matchDetailsMen,
  matchDetailsWomen,
  matchDetailsAcademy,
} from './matchDetailsObject.js';
import { useState } from 'react';

const TabContainer = styled.div`
  position: relative;
  margin-top: 10rem;
  background: #339af0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 3rem;
  gap: 6rem;
  height: 60vh;
`;

const TabContent = styled.div`
  display: none;
  width: 36rem;
  height: 27rem;
  background: #fff;

  padding: 1.5rem;
  gap: 0.3rem;

  &.active {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

const CenterTab = styled.div`
  width: 60rem;
  height: 7.5rem;
  background: #e9ecef;
  position: absolute;
  top: 0;
  right: 50%;
  transform: translate(50%, -50%);
  border-radius: 15rem;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Li = styled.li`
  list-style: none;
  width: 18rem;
  padding: 1.8rem 4.5rem;
  border-radius: 5rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: #001489;
  text-transform: uppercase;
  cursor: pointer;
  &.active {
    background: white;
  }
`;
const Dates = styled.div`
  text-transform: uppercase;
  font-size: 1.4rem;
  color: #343a40;
  font-weight: bold;
`;
const Title = styled.div`
  font-size: 1rem;
  color: #868e96;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Teams = styled.div`
  display: grid;
  grid-template-columns: 10rem auto 10rem;
  justify-items: center;
  align-items: center;
  padding: 1rem 1.2rem 3.4rem 1.2rem;
  column-gap: 2rem;
  row-gap: 1.5rem;
`;

const Img = styled.img`
  width: 6rem;
`;

const TeamHome = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: #001489;
  text-align: center;
`;
const TeamAway = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: #001489;
  grid-column: 3/4;
  grid-row: 2/3;
  text-align: center;
`;

const MatchTime = styled.div`
  color: #001489;
  width: 9rem;
  height: 6rem;
  border: 1px solid #adb5bd;
  padding: 0.4rem 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
`;

const MatchDetail = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-transform: uppercase;
  padding: 1.5rem 9rem;
  font-weight: bold;
  background: #001489;
  gap: 1rem;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
`;

function TabComponent() {
  const [activeTab, setActiveTab] = useState('tab1');
  function handleTabClick(tab) {
    setActiveTab(() => tab);
  }
  return (
    <TabContainer>
      <CenterTab>
        <Ul>
          <Li
            className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab1')}
          >
            {console.log(activeTab)}
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
      </CenterTab>

      <TabContent
        id="tab1"
        className={`tab-content ${activeTab === 'tab1' ? 'active' : ''}`}
      >
        <Dates>{matchDetailsMen.past.date}</Dates>
        <Title>{matchDetailsMen.past.title}</Title>

        <Teams>
          <Img src={matchDetailsMen.past.team1Logo} alt="home logo" />
          <MatchTime>{matchDetailsMen.past.matchTime}</MatchTime>
          <Img src={matchDetailsMen.past.team2Logo} alt="away logo" />
          <TeamHome>{matchDetailsMen.past.team1}</TeamHome>
          <TeamAway>{matchDetailsMen.past.team2}</TeamAway>
        </Teams>
        <NavLink to="matchDetails">
          <MatchDetail>
            match center <HiArrowRight size={15} color="#fff" />
          </MatchDetail>
        </NavLink>
      </TabContent>

      <TabContent
        id="tab1"
        className={`tab-content ${activeTab === 'tab1' ? 'active' : ''}`}
      >
        <Dates>{matchDetailsMen.present.date}</Dates>
        <Title>{matchDetailsMen.present.title}</Title>

        <Teams>
          <Img src={matchDetailsMen.present.team1Logo} alt="home logo" />
          <MatchTime>{matchDetailsMen.present.matchTime}</MatchTime>
          <Img src={matchDetailsMen.present.team2Logo} alt="away logo" />

          <TeamHome>{matchDetailsMen.present.team1}</TeamHome>
          <TeamAway>{matchDetailsMen.present.team2}</TeamAway>
        </Teams>

        <NavLink to="matchDetails">
          <MatchDetail>
            match center <HiArrowRight size={15} color="#fff" />
          </MatchDetail>
        </NavLink>
      </TabContent>

      <TabContent
        id="tab1"
        className={`tab-content ${activeTab === 'tab1' ? 'active' : ''}`}
      >
        <Dates>{matchDetailsMen.future.date}</Dates>
        <Title>{matchDetailsMen.future.title}</Title>
        <Teams>
          <Img src={matchDetailsMen.future.team1Logo} alt="home logo" />
          <MatchTime>{matchDetailsMen.future.matchTime}</MatchTime>
          <Img src={matchDetailsMen.future.team2Logo} alt="away logo" />

          <TeamHome>{matchDetailsMen.future.team1}</TeamHome>
          <TeamAway>{matchDetailsMen.future.team2}</TeamAway>
        </Teams>
        <NavLink to="matchDetails">
          <MatchDetail>
            match center <HiArrowRight size={15} color="#fff" />
          </MatchDetail>
        </NavLink>
      </TabContent>

      <TabContent
        id="tab2"
        className={`tab-content ${activeTab === 'tab2' ? 'active' : ''}`}
      >
        <Dates>{matchDetailsWomen.past.date}</Dates>
        <Title>{matchDetailsWomen.past.title}</Title>
        <Teams>
          <Img src={matchDetailsWomen.past.team1Logo} alt="home logo" />
          <MatchTime>{matchDetailsWomen.past.matchTime}</MatchTime>
          <Img src={matchDetailsWomen.past.team2Logo} alt="away logo" />

          <TeamHome>{matchDetailsWomen.past.team1}</TeamHome>
          <TeamAway>{matchDetailsWomen.past.team2}</TeamAway>
        </Teams>
        <NavLink to="matchDetails">
          <MatchDetail>
            match center <HiArrowRight size={15} color="#fff" />
          </MatchDetail>
        </NavLink>
      </TabContent>

      <TabContent
        id="tab2"
        className={`tab-content ${activeTab === 'tab2' ? 'active' : ''}`}
      >
        <Dates>{matchDetailsWomen.present.date}</Dates>
        <Title>{matchDetailsWomen.present.title}</Title>
        <Teams>
          <Img src={matchDetailsWomen.present.team1Logo} alt="home logo" />
          <MatchTime>{matchDetailsWomen.present.matchTime}</MatchTime>
          <Img src={matchDetailsWomen.present.team2Logo} alt="away logo" />

          <TeamHome>{matchDetailsWomen.present.team1}</TeamHome>
          <TeamAway>{matchDetailsWomen.present.team2}</TeamAway>
        </Teams>
        <NavLink to="matchDetails">
          <MatchDetail>
            match center <HiArrowRight size={15} color="#fff" />
          </MatchDetail>
        </NavLink>
      </TabContent>

      <TabContent
        id="tab2"
        className={`tab-content ${activeTab === 'tab2' ? 'active' : ''}`}
      >
        <Dates>{matchDetailsWomen.future.date}</Dates>
        <Title>{matchDetailsWomen.future.title}</Title>
        <Teams>
          <Img src={matchDetailsWomen.future.team1Logo} alt="home logo" />
          <MatchTime>{matchDetailsWomen.future.matchTime}</MatchTime>
          <Img src={matchDetailsWomen.future.team2Logo} alt="away logo" />

          <TeamHome>{matchDetailsWomen.future.team1}</TeamHome>
          <TeamAway>{matchDetailsWomen.future.team2}</TeamAway>
        </Teams>
        <NavLink to="matchDetails">
          <MatchDetail>
            match center <HiArrowRight size={15} color="#fff" />
          </MatchDetail>
        </NavLink>
      </TabContent>

      <TabContent
        id="tab3"
        className={`tab-content ${activeTab === 'tab3' ? 'active' : ''}`}
      >
        <Dates>{matchDetailsAcademy.past.date}</Dates>
        <Title>{matchDetailsAcademy.past.title}</Title>
        <Teams>
          <Img src={matchDetailsAcademy.past.team1Logo} alt="home logo" />
          <MatchTime>{matchDetailsAcademy.past.matchTime}</MatchTime>
          <Img src={matchDetailsAcademy.past.team2Logo} alt="away logo" />

          <TeamHome>{matchDetailsAcademy.past.team1}</TeamHome>
          <TeamAway>{matchDetailsAcademy.past.team2}</TeamAway>
        </Teams>
        <NavLink to="matchDetails">
          <MatchDetail>
            match center <HiArrowRight size={15} color="#fff" />
          </MatchDetail>
        </NavLink>
      </TabContent>

      <TabContent
        id="tab3"
        className={`tab-content ${activeTab === 'tab3' ? 'active' : ''}`}
      >
        <Dates>{matchDetailsAcademy.present.date}</Dates>
        <Title>{matchDetailsAcademy.present.title}</Title>
        <Teams>
          <Img src={matchDetailsAcademy.present.team1Logo} alt="home logo" />
          <MatchTime>{matchDetailsAcademy.present.matchTime}</MatchTime>
          <Img src={matchDetailsAcademy.present.team2Logo} alt="away logo" />

          <TeamHome>{matchDetailsAcademy.present.team1}</TeamHome>
          <TeamAway>{matchDetailsAcademy.present.team2}</TeamAway>
        </Teams>
        <NavLink to="matchDetails">
          <MatchDetail>
            match center <HiArrowRight size={15} color="#fff" />
          </MatchDetail>
        </NavLink>
      </TabContent>

      <TabContent
        id="tab3"
        className={`tab-content ${activeTab === 'tab3' ? 'active' : ''}`}
      >
        <Dates>{matchDetailsAcademy.future.date}</Dates>
        <Title>{matchDetailsAcademy.future.title}</Title>
        <Teams>
          <Img src={matchDetailsAcademy.future.team1Logo} alt="home logo" />
          <MatchTime>{matchDetailsAcademy.future.matchTime}</MatchTime>
          <Img src={matchDetailsAcademy.future.team2Logo} alt="away logo" />

          <TeamHome>{matchDetailsAcademy.future.team1}</TeamHome>
          <TeamAway>{matchDetailsAcademy.future.team2}</TeamAway>
        </Teams>
        <NavLink to="matchDetails">
          <MatchDetail>
            match center <HiArrowRight size={15} color="#fff" />
          </MatchDetail>
        </NavLink>
      </TabContent>
    </TabContainer>
  );
}

export default TabComponent;
