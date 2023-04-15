import React from 'react';
import styled from 'styled-components';

const StyledImgAndTitle = styled.div`
    grid-area: 1 / 1 / 2 / 5;
    display: flex;
    flex-direction: column;

    @media (min-width: 667px) {
        grid-area: 2 / 2 / 3 / 8;
        flex-direction: row;
        margin: 90px 0 20px 0;
        width: auto;
    }

    @media (min-width: 1025px) {
        grid-area: 2 / 2 / 3 / 7;
        margin: 80px 0 32px 0;
        align-items: center;
    }
`

const ImgBoxDiv = styled.div`
    align-self: center;

    @media (min-width: 667px) {
        margin-right: 40px;
    }
`

const HeaderImg = styled.img`
    width: 164px;
    height: 164px;
    border-radius: 50%;

    @media (min-width: 667px) {
        margin-bottom: 35px;
    }

    @media (min-width: 1025px) {
        margin-bottom: 0;
    }
`

const StyledMainTitle = styled.div`
    margin: 0;
    padding-bottom: 40px;
    padding-top: 29px;

    @media (min-width: 667px) {
        margin: 0;
    }

    @media (min-width: 1025px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

const HeaderH1 = styled.h1`
    color: var(--secondary-color-1);
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 38px;

    @media (min-width: 1024px) {
        margin-top: 0;
    }
`

const HeaderH2 = styled.h2`
    font-weight: 900;
    font-size: 2rem;
    line-height: 43px;
`

export const HeaderTitleBox = () => {
  return (
    <StyledImgAndTitle>
      <ImgBoxDiv>
        <HeaderImg
          src={`${process.env.PUBLIC_URL}./assets/img/img-camilla.jpg`}
          alt="Camilla" />
      </ImgBoxDiv>
      <StyledMainTitle>
        <HeaderH1>Camilla Cronqvist</HeaderH1>
        <HeaderH2>Frontend developer</HeaderH2>
      </StyledMainTitle>
    </StyledImgAndTitle>
  )
}