import React from 'react';
import styled from 'styled-components';

const StyledHeroImg = styled.div`
  @media (min-width: 667px) {
    grid-area: 1 / 1 / 2 / 9;
    width: auto;
    background-image: url('https://images.pexels.com/photos/2414036/pexels-photo-2414036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    background-size: cover;
    background-position: 75%;
    height: 100vh;
}

  @media (min-width: 1024px) {
    grid-area: 1 / 7 / 6 / 13;
    width: 100%;
    align-self: stretch;
    background-position: center;
    margin: 0;
    padding: 0;
    }
`;

const HeroImgP = styled.p`
    display: none;
`;

// Hero img only visible in tablet & desktop
export const HeroImg = () => {
  return (
    <StyledHeroImg aria-hidden="true">
      <HeroImgP>Only for tablet and desktop purpose</HeroImgP>
    </StyledHeroImg>
  )
}
