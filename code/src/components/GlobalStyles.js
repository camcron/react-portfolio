import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    // layout
    box-sizing: border-box;
    margin: 0;

    --primary-color-1: #5b695f; // h2 titles
    --primary-color-2: #F5F5F5; // "Live" button
    --primary-color-3: #ede8e4; // Background color TechStack
    --primary-color-4: #D0D0D0; // Icons
    --primary-color-5: #f8e6cf; // Background color Skills

    --secondary-color-1: #dc7958; // h1, & Footer h3
    --secondary-color-2: #615d57;; // "Live" button hover, & Footer h2
    --secondary-color-3: #2c3847; // "Code" button hover
    --secondary-color-4: #966d57; // span TechStack color 1, & Upcoming skills
    --secondary-color-5: #66665d; // span TechStack color 2, & More skills
    --secondary-color-6: #617b66; // span TechStack color 3, & Code skills
    --secondary-color-6: #4b9f68; // Toolbox skills

    --neutral-light: #FFFFFF; // White, Background color body,
    --neutral-medium: #222221; // DarkGrey, Scroll
    --neutral-dark: #000000; // Black, Icons hover, Footer a

    // Text
    color: var(#000000); // text color
    font-family: 'Satoshi-Variable', sans-serif; // font
    font-style: normal;
    --font-size: 16px; // = 1rem
  }
  
  body (
    margin: 0;
  )

  section {
    padding: 64px 24px 0;
  }

  h2 {
    color: var(--primary-color-1);
    font-weight: 700;
    font-size: 4.5rem;
    line-height: 80px;
    margin: 0;
  }

  h3 {
    font-weight: 900;
    font-size: 2rem;
  }

  p {
    font-weight: 400;
    font-size: 1.375rem;
    line-height: 29px;
  }

  a {
    text-decoration: none;
  }

  img {
    height: 280px;
    width: 280px;
    object-fit: cover;
    }
`;
