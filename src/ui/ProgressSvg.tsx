import media from '@styles/media';
import { MotionValue } from 'motion';
import { motion } from 'motion/react';
import styled, { css } from 'styled-components';

const StyledProgressSvg = styled.div`
  position: sticky;
  width: 80px;
  height: 80px;
  left: 0;
  bottom: 80%;

  ${media.laptop(
    'max-width',
    css`
      bottom: 100px;
      left: 100%;
    `
  )}
  ${media.tablet(
    'max-width',
    css`
      width: 50px;
      height: 50px;
    `
  )}
`;

type Props = {
  scrollYProgress: MotionValue<number>;
};
function ProgressSvg({ scrollYProgress }: Props) {
  return (
    <StyledProgressSvg>
      <svg width='100%' height='100%' viewBox='0 0 160 160'>
        <circle cx='80' cy='80' r='70' fill='none' stroke='#ddd' strokeWidth={20} />

        <motion.circle
          cx='80'
          cy='80'
          r='70'
          fill='none'
          stroke='#dd4c62'
          strokeWidth={20}
          style={{ pathLength: scrollYProgress }}
          transform='rotate(-90, 80, 80)'
        />
      </svg>
    </StyledProgressSvg>
  );
}

export default ProgressSvg;
