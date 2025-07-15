import { motion } from 'motion/react';
import styled, { css } from 'styled-components';

import media from '@styles/media';

// Styles
export const StyledBubble = styled.p`
  width: 100%;
  height: 100px;
  background-color: white;
  color: #555;
  padding: 24px;
  font-size: 18px;
  border-radius: 20px 20px 0 20px;
`;

export const StyledProfileImage = styled.img`
  width: 55px;
  height: 50px;
  object-fit: cover;

  border-radius: 50%;
`;

const StyledBubbleSpeech = styled.div`
  margin-top: 256px;

  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 8px;

  width: 50%;

  ${media.desktop(
    'max-width',
    css`
      width: 100%;
    `
  )}
  ${media.tablet(
    'max-width',
    css`
      display: none;
    `
  )}
`;

const AnimatedStyledBubbleSpeech = motion(StyledBubbleSpeech);
export default AnimatedStyledBubbleSpeech;
