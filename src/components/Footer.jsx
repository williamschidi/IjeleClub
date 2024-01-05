import {
  FaApple,
  FaFacebookSquare,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { BiLogoPlayStore } from 'react-icons/bi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const FooterContainer = styled.div`
  background: #001489;
  padding: 6rem 10rem;
`;

const SubFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  color: #fff;
  font-size: 1.8rem;
`;

const Img = styled.img`
  width: 10rem;
`;

const LeftFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5rem;
`;
const SocialIcons = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
`;
const CenterFooter = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Li = styled.li`
  list-style: none;
`;

const RightFooter = styled.div`
  display: inline-flex;
  /* justify-content: space-between;
  align-items: center; */
  gap: 3rem;
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 0.7rem 1rem;
  background: #151414a9;
  /* background: var(--intermediate-shade-color); */
  border: 1px solid var(--white-color);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white-color);
  gap: 0.4rem;
`;

const Span = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
`;

function Footer() {
  return (
    <FooterContainer>
      <Img src="logo.jpg" alt="logo" />
      <SubFooterContainer>
        <LeftFooter>
          <div>Ijele Football Club Address</div>
          <SocialIcons>
            <NavLink to="">
              <FaFacebookSquare size={30} color="var(--white-color)" />
            </NavLink>
            <NavLink to="">
              <FaTwitter size={30} color="var(--white-color)" />
            </NavLink>
            <NavLink to="">
              <FaInstagram size={30} color="var(--white-color)" />
            </NavLink>
            <NavLink to="">
              <FaYoutube size={30} color="var(--white-color)" />
            </NavLink>
            <NavLink to="">
              <FaTiktok size={30} color="var(--white-color)" />
            </NavLink>
          </SocialIcons>
        </LeftFooter>
        <CenterFooter>
          <Li>About The Club</Li>
          <Li>Contact Us</Li>
          <Li>Frequently Ask Question</Li>
          <Li>The shed-Chat, Rumours and more</Li>
        </CenterFooter>
        <RightFooter>
          <Button>
            <FaApple size={30} />
            <p>
              Download on the <br />
              <Span>App Store</Span>
            </p>
          </Button>
          <Button>
            <BiLogoPlayStore size={30} />
            <p>
              GET IT ON <br />
              <Span>Google Play</Span>
            </p>
          </Button>
        </RightFooter>
      </SubFooterContainer>
    </FooterContainer>
  );
}

export default Footer;
