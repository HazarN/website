import styled from 'styled-components';

import HeroLeft from '@features/hero/HeroLeft';
import HeroRight from './HeroRight';

const StyledHero = styled.div`
  display: flex;

  height: 100%;
  overflow: hidden;
`;

function Hero() {
  return (
    <StyledHero>
      <HeroLeft />

      <HeroRight />
    </StyledHero>
  );
}

export default Hero;
