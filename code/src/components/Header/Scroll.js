import React from 'react';
import styled from 'styled-components';

const ScrollContainer = styled.div`
    grid-area: 4 / 1 / 5 / 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--neutral-medium);

    @media (min-width: 667px) {
        grid-area: 5 / 1 / 6 / 9;
        margin-bottom: 10px;
        margin-top: 1;
    }

    @media (min-width: 1024px) {
        grid-area: 4 / 1 / 5 / 5;
    }
`;

const ScrollText = styled.p`
    color: var(--neutral-medium);
    font-weight: 900;
    font-size: 1rem;
    line-height: 22px;
`;

const ArrowSvg = styled.svg`
    width: 19px;
    height: 30px;
    margin-top: 40px;
`;

export const Scroll = () => {
  return (
    <ScrollContainer aria-label="Scroll down to see more content">

      <ArrowSvg
        width="23"
        height="34"
        viewBox="0 0 23 34"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21 22.5L11.5 32M11.5 32L2 22.5M11.5 32L11.5 2"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round" />
      </ArrowSvg>

      <ScrollText>Lets scroll</ScrollText>

      <svg
        width="76"
        height="3"
        viewBox="0 0 76 3"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="76" height="3" fill="currentColor" />
      </svg>

    </ScrollContainer>
  )
}