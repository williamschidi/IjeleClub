import styled from 'styled-components';
import { HiArrowRight } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
import { matchDetailsMen } from './matchDetailsObject.js';

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
  width: 35rem;
  height: 25rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  gap: 1rem;
`;

const CenterTab = styled.div`
  width: 60rem;
  height: 8rem;
  background: #f1f3f5;
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
  font-size: 1.8rem;
  font-weight: bold;
  color: #001489;
  text-transform: uppercase;
  cursor: pointer;
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
  /* padding: 0.3rem; */
`;
const TeamLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const Teams = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  padding: 1rem 1.4rem 1.4rem 1.4rem;
`;
const Img = styled.img`
  width: 6rem;
`;

const Team = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #001489;
`;

const MatchTime = styled.div`
  color: #001489;
  width: 10rem;
  height: 5rem;
  border: 1px solid #adb5bd;
  padding: 0.4rem 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
`;

const MatchDetail = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-transform: uppercase;
  padding: 1.2rem 7rem;
  font-weight: bold;
  background: #001489;
  gap: 1rem;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
`;

function TabComponent() {
  return (
    <TabContainer>
      <CenterTab>
        <Ul>
          <Li>Men</Li>
          <Li>Women</Li>
          <Li>Academy</Li>
        </Ul>
      </CenterTab>

      <TabContent>
        <Dates>{matchDetailsMen.past.date}</Dates>
        <Title>{matchDetailsMen.past.title}</Title>
        <TeamLogo>
          <Img src={matchDetailsMen.past.team1Logo} alt="home logo" />
          <MatchTime>{matchDetailsMen.past.matchTime}</MatchTime>
          <Img src={matchDetailsMen.past.team2Logo} alt="away logo" />
        </TeamLogo>
        <Teams>
          <Team>{matchDetailsMen.past.team1}</Team>
          <Team>{matchDetailsMen.past.team2}</Team>
        </Teams>
        <NavLink to="matchDetails">
          <MatchDetail>
            match center <HiArrowRight size={15} color="#fff" />
          </MatchDetail>
        </NavLink>
      </TabContent>

      <TabContent>
        <Dates>{matchDetailsMen.present.date}</Dates>
        <Title>{matchDetailsMen.present.title}</Title>
        <TeamLogo>
          <Img src={matchDetailsMen.present.team1Logo} alt="home logo" />
          <MatchTime>{matchDetailsMen.present.matchTime}</MatchTime>
          <Img src={matchDetailsMen.present.team2Logo} alt="away logo" />
        </TeamLogo>
        <Teams>
          <Team>{matchDetailsMen.present.team1}</Team>
          <Team>{matchDetailsMen.present.team2}</Team>
        </Teams>
        <NavLink to="matchDetails">
          <MatchDetail>
            match center <HiArrowRight size={15} color="#fff" />
          </MatchDetail>
        </NavLink>
      </TabContent>

      <TabContent>
        <Dates>{matchDetailsMen.future.date}</Dates>
        <Title>{matchDetailsMen.future.title}</Title>
        <TeamLogo>
          <Img src={matchDetailsMen.future.team1Logo} alt="home logo" />
          <MatchTime>{matchDetailsMen.future.matchTime}</MatchTime>
          <Img src={matchDetailsMen.future.team2Logo} alt="away logo" />
        </TeamLogo>
        <Teams>
          <Team>{matchDetailsMen.future.team1}</Team>
          <Team>{matchDetailsMen.future.team2}</Team>
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
