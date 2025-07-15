import { motion } from 'motion/react';
import styled from 'styled-components';
import BubbleSpeech from './BubbleSpeech';
import HeroContainer from './HeroContainer.styled';

const StyledContactButton = styled.div`
  position: relative;
`;
const AnimatedStyledContactButton = motion(StyledContactButton);

const StyledCircleText = styled.text`
  letter-spacing: 3px;
  font-size: 20px;
`;

const StyledArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  margin: auto;
`;

function HeroRight() {
  return (
    <HeroContainer alignment='right'>
      <BubbleSpeech />

      <motion.a
        href='/#contact'
        animate={{ x: [200, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
      >
        <AnimatedStyledContactButton
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox='0 0 200 200' width='125' height='125'>
            <circle cx='100' cy='100' r='90' fill='wheat' />
            <path
              id='innerCirclePath'
              fill='none'
              d='M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0'
            />
            <StyledCircleText>
              <textPath href='#innerCirclePath'>Contact Me •</textPath>
            </StyledCircleText>
            <StyledCircleText>
              <textPath href='#innerCirclePath' startOffset='50%'>
                Contact Me •
              </textPath>
            </StyledCircleText>
          </svg>

          <StyledArrow>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='50'
              height='50'
              fill='none'
              stroke='black'
              strokeWidth='2'
            >
              <line x1='6' y1='18' x2='18' y2='6' />
              <polyline points='9 6 18 6 18 15' />
            </svg>
          </StyledArrow>
        </AnimatedStyledContactButton>
      </motion.a>
    </HeroContainer>
  );
}

export default HeroRight;
