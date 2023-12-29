import styled from 'styled-components';
import ProfileMen from './ProfileMen';
import ProfileWomen from './ProfileWomen';

const ProfileContainer = styled.div`
  height: 85vh;
  background: #001489;
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6rem;
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
