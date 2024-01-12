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
import { useMediaQuery } from 'react-responsive';

const FooterContainer = styled.div`
  background: #001489;
  padding: 6rem 4rem;
  gap: 2rem;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 6rem 6rem;
  }
`;

const SubFooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--white-color);
  font-size: 1.8rem;
  font-weight: bold;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 1.6rem;
  }
`;

const ImgContainer = styled.div`
  padding: 0 0 0 4rem;

  @media screen and (max-width: 600rem) {
    padding: 0 0 0 1rem;
  }
`;

const Img = styled.img`
  width: 8rem;
`;

const LeftFooter = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5rem;
`;
const SocialIcons = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 600px) {
    padding-bottom: 3rem;
    /* border-bottom: 2px solid var(--white-color); */
  }
`;
const CenterFooter = styled.ul`
  width: auto;
  padding: 4rem 2rem 4rem 4rem;
  border-left: 1px solid var(--white-color);
  border-right: 1px solid var(--white-color);
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 600px) {
    padding: 2rem 3rem 2rem 0;
    border-left: none;
    border-right: none;
    border-top: 1px solid var(--intermediate-color);
    border-bottom: 1px solid var(--intermediate-color);
    gap: 2rem;
  }
`;

const Li = styled.li`
  list-style: none;
`;

const RightFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 600px) {
    padding-top: 3rem;
    gap: 1rem;
  }
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 0.7rem 1rem;
  background: #151414a9;
  border: 1px solid var(--intermediate-color);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white-color);
  gap: 0.4rem;
  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
    padding: 0.5rem 0.8rem;
    gap: 0.2rem;
  }
`;

const Span = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
  @media screen and (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

function Footer() {
  const mobile = useMediaQuery({ maxWidth: 600 });
  return (
    <FooterContainer>
      <ImgContainer>
        <Img src="logo.jpg" alt="logo" />
      </ImgContainer>
      <SubFooterContainer>
        <LeftFooter>
          <div>Ijele Football Club Address</div>
          <SocialIcons>
            <NavLink to="">
              <FaFacebookSquare
                size={mobile ? 25 : 30}
                color="var(--white-color)"
              />
            </NavLink>
            <NavLink to="">
              <FaTwitter size={mobile ? 25 : 30} color="var(--white-color)" />
            </NavLink>
            <NavLink to="">
              <FaInstagram size={mobile ? 25 : 30} color="var(--white-color)" />
            </NavLink>
            <NavLink to="">
              <FaYoutube size={mobile ? 25 : 30} color="var(--white-color)" />
            </NavLink>
            <NavLink to="">
              <FaTiktok size={mobile ? 25 : 30} color="var(--white-color)" />
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
