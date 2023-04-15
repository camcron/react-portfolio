import React from 'react';
import styled from 'styled-components';

const HeaderIconsWrapper = styled.div`
    grid-area: 3 / 2 / 4 / 4;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;

    @media (min-width: 667px) {
        grid-area: 4 / 2 / 5 / 4;
        justify-content: space-between;
        padding-left: 40px;
    }
    
    @media (min-width: 1024px) {
        grid-area: 4 / 2 / 5 / 3;
        align-self: flex-start;
    }
`;

const HeaderIcon = styled.a`
    margin: 20px 0;
    color: #D0D0D0;

    &:hover {
    color: #000000;
    }
`;

const HeaderIconSvg = styled.svg`
    width: 32px;
    height: 32px;
`;

export const HeaderIcons = () => {
  return (
    <HeaderIconsWrapper>
      <HeaderIcon href="https://www.linkedin.com/in/camilla-cronqvist/" role="button" title="Link to Linkedin" className="icons" target="_blank" aria-label="Link to Camilla's LinkedIn profile" rel="noreferrer">
        <HeaderIconSvg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.1875 25V10.9844H5.82812V25H10.1875ZM7.98438 9.10938C9.39062 9.10938 10.5156 7.9375 10.5156 6.53125C10.5156 5.17188 9.39062 4.04688 7.98438 4.04688C6.625 4.04688 5.5 5.17188 5.5 6.53125C5.5 7.9375 6.625 9.10938 7.98438 9.10938ZM26.4531 25H26.5V17.3125C26.5 13.5625 25.6562 10.6562 21.25 10.6562C19.1406 10.6562 17.7344 11.8281 17.125 12.9062H17.0781V10.9844H12.9062V25H17.2656V18.0625C17.2656 16.2344 17.5938 14.5 19.8438 14.5C22.0938 14.5 22.1406 16.5625 22.1406 18.2031V25H26.4531Z"
            fill="currentColor" />
        </HeaderIconSvg>
      </HeaderIcon>

      <HeaderIcon href="https://github.com/camcron" role="button" title="Link to GitHub" className="icons" target="_blank" aria-label="Link to Camilla's GitHub profile" rel="noreferrer">
        <HeaderIconSvg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.6452 33.7684C18.6452 33.6363 18.5161 33.5042 18.3226 33.5042C18.129 33.5042 18 33.6363 18 33.7684C18 33.9006 18.129 34.0327 18.3226 33.9667C18.5161 33.9667 18.6452 33.9006 18.6452 33.7684ZM16.6452 33.4381C16.6452 33.5702 16.7742 33.7684 16.9677 33.7684C17.0968 33.8345 17.2903 33.7684 17.3548 33.6363C17.3548 33.5042 17.2903 33.372 17.0968 33.3059C16.9032 33.2399 16.7097 33.3059 16.6452 33.4381ZM19.5484 33.372C19.3548 33.372 19.2258 33.5042 19.2258 33.7024C19.2258 33.8345 19.4194 33.9006 19.6129 33.8345C19.8065 33.7684 19.9355 33.7024 19.871 33.5702C19.871 33.4381 19.6774 33.3059 19.5484 33.372ZM23.7419 8C14.8387 8 8 15.0037 8 24.1218C8 31.4559 12.4516 37.7328 18.9032 39.9793C19.7419 40.1115 20 39.5829 20 39.1864C20 38.7239 20 36.4774 20 35.0899C20 35.0899 15.4839 36.081 14.5161 33.1077C14.5161 33.1077 13.8065 31.1916 12.7742 30.7291C12.7742 30.7291 11.2903 29.6719 12.8387 29.6719C12.8387 29.6719 14.4516 29.8041 15.3548 31.3898C16.7742 33.9667 19.0968 33.2399 20.0645 32.7774C20.1935 31.7202 20.5806 30.9934 21.0968 30.5309C17.4839 30.1344 13.8065 29.6059 13.8065 23.2628C13.8065 21.4128 14.3226 20.5539 15.3548 19.3645C15.1613 18.902 14.6452 17.1841 15.5484 14.8716C16.8387 14.4751 20 16.6556 20 16.6556C21.2903 16.2591 22.6452 16.127 24 16.127C25.4194 16.127 26.7742 16.2591 28.0645 16.6556C28.0645 16.6556 31.1613 14.4091 32.5161 14.8716C33.4194 17.1841 32.8387 18.902 32.7097 19.3645C33.7419 20.5539 34.3871 21.4128 34.3871 23.2628C34.3871 29.6059 30.5806 30.1344 26.9677 30.5309C27.5484 31.0595 28.0645 32.0506 28.0645 33.6363C28.0645 35.8167 28 38.5918 28 39.1204C28 39.5829 28.3226 40.1115 29.1613 39.9132C35.6129 37.7328 40 31.4559 40 24.1218C40 15.0037 32.7097 8 23.7419 8ZM14.2581 30.7952C14.129 30.8612 14.1935 31.0595 14.2581 31.1916C14.3871 31.2577 14.5161 31.3237 14.6452 31.2577C14.7097 31.1916 14.7097 30.9934 14.5806 30.8612C14.4516 30.7952 14.3226 30.7291 14.2581 30.7952ZM13.5484 30.2666C13.4839 30.3987 13.5484 30.4648 13.6774 30.5309C13.8065 30.5969 13.9355 30.5969 14 30.4648C14 30.3987 13.9355 30.3327 13.8065 30.2666C13.6774 30.2005 13.6129 30.2005 13.5484 30.2666ZM15.6129 32.6452C15.5484 32.7113 15.5484 32.9095 15.7419 33.0416C15.871 33.1738 16.0645 33.2399 16.129 33.1077C16.1935 33.0416 16.1935 32.8434 16.0645 32.7113C15.9355 32.5791 15.7419 32.5131 15.6129 32.6452ZM14.9032 31.6541C14.7742 31.7202 14.7742 31.9184 14.9032 32.0506C15.0323 32.1827 15.1613 32.2488 15.2903 32.1827C15.3548 32.1166 15.3548 31.9184 15.2903 31.7863C15.1613 31.6541 15.0323 31.588 14.9032 31.6541Z"
            fill="currentColor" />
        </HeaderIconSvg>
      </HeaderIcon>
    </HeaderIconsWrapper>
  )
}