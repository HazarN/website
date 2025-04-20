import styled, { css } from 'styled-components';

import HeroBackground from '@features/hero/HeroBackground';
import HeroLeft from '@features/hero/HeroLeft';
import HeroRight from '@features/hero/HeroRight';
import media from '@styles/media';

const StyledHero = styled.div`
  display: flex;

  height: 100%;
  overflow: hidden;

  ${media.tablet(
    'max-width',
    css`
      flex-direction: column;
      align-items: end;
    `
  )}
`;

function Hero() {
  return (
    <StyledHero>
      <HeroLeft />
      <HeroRight />

      <HeroBackground />
    </StyledHero>
  );
}

export default Hero;
