import styled, { css } from 'styled-components';

import media from '@styles/media';

const StyledHeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: -1;
`;

const StyledImageWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  height: 80%;
  width: max-content;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.desktop(
    'max-width',
    css`
      height: 55%;
      top: auto;
      bottom: 0;
    `
  )}
  ${media.laptop(
    'max-width',
    css`
      height: 45%;
      top: auto;
      bottom: 0;
    `
  )}
  ${media.tablet(
    'max-width',
    css`
      height: 45%;
    `
  )}
`;

function HeroBackground() {
  return (
    <StyledHeroBackground>
      <StyledImageWrapper className='heroImg'>
        <img src='/hero/hero.png' alt='background image' />
      </StyledImageWrapper>
    </StyledHeroBackground>
  );
}

export default HeroBackground;
