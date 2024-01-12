import styled from 'styled-components';
import ProfileMen from './ProfileMen';
import ProfileWomen from './ProfileWomen';

const ProfileContainer = styled.div`
  height: 85vh;
  background: var(--primary-color);
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0 4rem;
    gap: 1.6rem;
    justify-content: flex-start;
  }
`;

function ProfileSection() {
  return (
    <ProfileContainer>
      <ProfileMen />
      <ProfileWomen />
    </ProfileContainer>
  );
}

export default ProfileSection;
