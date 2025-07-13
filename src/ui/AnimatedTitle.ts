import media from '@styles/media';
import { motion } from 'motion/react';
import styled, { css } from 'styled-components';

const Title = styled.h1`
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
  ${media.laptop(
    'max-width',
    css`
      font-size: 64px;
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
