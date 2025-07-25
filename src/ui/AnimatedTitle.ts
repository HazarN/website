import { motion } from 'motion/react';
import styled, { css } from 'styled-components';

import media from '@styles/media';

export const Title = styled.h1`
  margin-top: 50px;
  font-size: 75px;
  color: wheat;

  span {
    color: white;
  }

  ${media.extra(
    'max-width',
    css`
      font-size: 72px;
    `
  )}
  ${media.desktop(
    'max-width',
    css`
      font-size: 64px;
    `
  )}
  ${media.laptop(
    'max-width',
    css`
      font-size: 50px;
    `
  )}
  ${media.tablet(
    'max-width',
    css`
      font-size: 48px;
    `
  )}
`;

const AnimatedTitle = motion(Title);
export default AnimatedTitle;
