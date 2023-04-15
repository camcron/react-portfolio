import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
    grid-area: 2 / 1 / 3 / 5;
    height: auto;

    @media (min-width: 667px) {
        grid-area: 3 / 2 / 4 / 8;
        margin: 0;
        padding-left: 40px;
        align-self: center;
    }

    @media (min-width: 1024px) {
        grid-area: 3 / 2 / 4 / 6;
        padding: 0 0 0 40px;
    }
`;

const AboutP = styled.p`
    font-family: 'EB Garamond';
    font-weight: 400;
    font-size: 1.375rem;
    line-height: 29px;
`

export const HeaderAbout = () => {
  return (
    <AboutWrapper>
      <AboutP>A dedicated front-end developer with a unique background
            as a detail-oriented food inspector and a system administrator.
            Passionate about creating user-friendly and visually appealing applications,
            she applies her problem-solving skills and fresh perspective
            to the world of web development.
      </AboutP>
    </AboutWrapper>
  )
}