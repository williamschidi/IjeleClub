import styled from 'styled-components';
import { HiArrowRight } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
import {
  matchDetailsMen,
  matchDetailsWomen,
  matchDetailsAcademy,
} from './matchDetailsObject.js';
import { useState } from 'react';
import CenterTab from './CenterTab.jsx';

const TabContainer = styled.div`
  position: relative;
  margin-top: 10rem;
  background: var(--secondary-color);
  padding: 10rem 3rem 3rem;
  height: 70vh;

  @media screen and (max-width: 600px) {
    padding: 4rem 3rem 3rem;
    height: 55vh;
  }
`;
const TabContentContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 4rem;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    gap: 2rem;
    width: 55rem;
    height: 45vh;
    overflow-x: hidden;
    justify-content: flex-start;
  }
`;

const TabContent = styled.div`
  display: none;
  width: 36rem;
  height: 27rem;
  background: var(--white-color);

  padding: 1.5rem;
  gap: 0.3rem;

  &.active {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex-shrink: 0;
  }

  @media screen and (max-width: 600px) {
    width: 30rem;
    height: 23rem;

    overflow: hidden;
  }

  @media screen and (min-width: 601px) and(max-width: 1200px) {
    width: 32rem;
    height: 23rem;
  }
`;

const Dates = styled.div`
  text-transform: uppercase;
  font-size: 1.4rem;
  color: var(--intermediate-shade-color);
  font-weight: bold;
`;
const Title = styled.div`
  font-size: 1rem;
  color: var(--intermediate-tint-color);
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

  @media screen and (max-width: 1050px) {
    grid-template-columns: 8rem auto 8rem;
    padding: 1rem 1.2rem 3rem 1.2rem;
  }
`;

const Img = styled.img`
  width: 6rem;
`;

const TeamHome = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--primary-color);
  text-align: center;
`;
const TeamAway = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--primary-color);
  grid-column: 3/4;
  grid-row: 2/3;
  text-align: center;
`;

const MatchTime = styled.div`
  color: var(--primary-color);
  width: 9rem;
  height: 6rem;
  border: 1px solid var(--intermediate-tint-color);
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
  color: var(--white-color);
  text-transform: uppercase;
  padding: 1.5rem 9rem;
  font-weight: bold;
  background: var(--primary-color);
  gap: 1rem;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;

  @media screen and (max-width: 1200px) {
    padding: 1rem 8rem;
    font-size: 1.2rem;
    gap: 0.7rem;
  }

  @media screen and (max-width: 1050px) {
    font-size: 1rem;
    padding: 0.8rem 7rem;
  }
`;

function TabComponent() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <TabContainer>
      <CenterTab activeTab={activeTab} setActiveTab={setActiveTab} />

      <TabContentContainer>
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
              match center <HiArrowRight size={15} color="var(--white-color)" />
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
              match center <HiArrowRight size={15} color="var(--white-color)" />
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
              match center <HiArrowRight size={15} color="var(--white-color)" />
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
              match center <HiArrowRight size={15} color="var(--white-color)" />
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
              match center <HiArrowRight size={15} color="var(--white-color)" />
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
              match center <HiArrowRight size={15} color="var(--white-color)" />
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
              match center <HiArrowRight size={15} color="var(--white-color)" />
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
              match center <HiArrowRight size={15} color="var(--white-color)" />
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
              match center <HiArrowRight size={15} color="var(--white-color)" />
            </MatchDetail>
          </NavLink>
        </TabContent>
      </TabContentContainer>
    </TabContainer>
  );
}

export default TabComponent;
