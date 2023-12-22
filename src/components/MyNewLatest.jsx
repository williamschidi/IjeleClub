import { useEffect, useRef, useState } from 'react';
import { HiArrowRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import styled, { css } from 'styled-components';

const SliderContainer = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 120rem;
  height: 50rem;
  margin: 0 auto;
  /* margin: 8rem; */
  position: relative;
  overflow: hidden;
`;

const ListNav = styled.ul`
  max-width: 120rem;
  margin: 8rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 6rem;
`;

const ListNavLi = styled.li`
  font-size: 5rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: #1864ab;
`;

const Button = styled.button`
  background: #1864ab;
  width: 6rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 37rem;
  height: 45rem;
  justify-content: flex-start;
  align-items: flex-start;
  flex-shrink: 0;
  overflow: hidden;
  transition: transform 1s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  /* transform: translateX(0); */

  ${(props) =>
    props.ind &&
    props.curSlide &&
    css`
      transform: translateX(${105 * (props.ind - props.curSlide)}%);
    `}
`;

const Img = styled.img`
  width: 100%;
  height: 20rem;
  transition: transform 0.7s ease-in-out;
  /* overflow: hidden; */
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const Div = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  padding: 3rem;
  height: 10rem;
  width: 100%;
`;

const H2 = styled.h2`
  font-size: 2rem;
  color: #1864ab;
`;

const LatestFooter = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
  padding-top: 2rem;
`;

const FooterSpan = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
  ${(props) =>
    props.type === 'text' &&
    css`
      color: #1864ab;
      letter-spacing: 1.3px;
    `}
`;

const img1 = `https://img.chelseafc.com/image/upload/f_auto,ar_16:9,w_500,c_fill,g_auto,q_90/video/2023/12/21/extended_thumbnail_v_hacken_v2.jpg`;

const img2 = `https://img.chelseafc.com/image/upload/f_auto,ar_16:9,w_500,c_fill,g_auto,q_90/video/2023/12/21/231220_UWCL_HACKEN_A_UNSEEN_MASTER.jpg`;

const img3 = `https://img.chelseafc.com/image/upload/f_auto,ar_16:9,w_500,c_fill,g_auto,q_90/video/2023/12/21/christmas_campaign_with_threee.png`;

const img4 = `https://img.chelseafc.com/image/upload/f_auto,ar_16:9,w_500,c_fill,g_auto,q_90/video/2023/12/21/231220_UEX_EFL_NEWCASTLE_v2.webp`;
const img5 = `https://img.chelseafc.com/image/upload/f_auto,ar_16:9,w_500,c_fill,g_auto,q_90/video/2023/12/21/CFC.XMAS.21.11.236997.jpg`;

const img6 = `https://img.chelseafc.com/image/upload/f_auto,ar_16:9,w_500,c_fill,g_auto,q_90/video/2023/12/21/highlights_v_hacken_20_12_v2.jpg`;
const images = [img1, img2, img3, img4, img5, img6];

function MyNewLatest() {
  const [curSlide, setCurSlide] = useState(0);

  const maxSlide = images.length;

  const nextSlide = () => {
    setCurSlide((prevSlide) => prevSlide + 1);
  };

  const prevSlide = () => {
    setCurSlide((prevSlide) => prevSlide - 1);
  };

  const cardRef = useRef(null);

  useEffect(() => {
    const item = cardRef.current.querySelectorAll(Card);
    Array.from(item).forEach((t, i) => {
      t.style.transform = `translateX(${100 * (i - curSlide)}%)`;
      t.style.padding = `2rem`;
    });
  }, [curSlide]);

  return (
    <>
      <ListNav>
        <ListNavLi>
          <span>Latest Video</span> <HiArrowRight size={30} color="#1864ab" />
        </ListNavLi>
        <ListNavLi>
          <Button onClick={nextSlide} disabled={maxSlide - curSlide <= 3}>
            <HiChevronLeft color="#fff" size={30} />
            {console.log(curSlide)}
          </Button>
          <Button onClick={prevSlide} disabled={curSlide < 1}>
            <HiChevronRight color="#fff" size={30} />
            {console.log(curSlide)}
          </Button>
        </ListNavLi>
      </ListNav>

      <SliderContainer ref={cardRef}>
        {images.map((img, ind) => (
          <Card key={img} curSlide={curSlide} ind={ind}>
            <Img src={img} alt={img} />
            <Div>
              <H2>Highlights: Arsenal 4-1 Chelsea </H2>
              <LatestFooter>
                <FooterSpan type="text">Video</FooterSpan>
                <FooterSpan type="date">11 Dec 23</FooterSpan>
              </LatestFooter>
            </Div>
          </Card>
        ))}
      </SliderContainer>
    </>
  );
}

export default MyNewLatest;
