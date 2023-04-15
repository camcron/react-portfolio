import React from 'react';
import styled from 'styled-components';
import { HeroImg } from './HeroImg';
import { HeaderTitleBox } from './HeaderTitleBox';
import { HeaderAbout } from './HeaderAbout';
import { HeaderIcons } from './HeaderIcons';
import { Scroll } from './Scroll';

const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr 30px 225px;
    padding: 55px 24px;
    height: 920px;

    @media (min-width: 667px) {
      grid-template-columns: minmax(102px, 1fr) repeat(6, 77px) minmax(102px, 1fr);
      grid-template-rows: 412px 244px 180px 32px 1fr;
      align-items: center;
      padding: 0;
    }

    @media (min-width: 1025px) {
      grid-template-columns: minmax(45px, 1fr) repeat(10, 1fr) minmax(45px, 1fr);
      grid-template-rows: 200px 300px 200px 100px 200px;
      height: 980px;
    }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <HeroImg />
      <HeaderTitleBox />
      <HeaderAbout />
      <HeaderIcons />
      <Scroll />
    </StyledHeader>
  )
}