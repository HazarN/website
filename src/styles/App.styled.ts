import styled, { css } from 'styled-components';

import media from '@styles/media';

const StyledApp = styled.main`
  max-width: 1536px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;

  ${media.mobile(
    'min-width',
    css`
      max-width: 640px;
    `
  )}
  ${media.tablet(
    'min-width',
    css`
      max-width: 768px;
    `
  )}
  ${media.laptop(
    'min-width',
    css`
      max-width: 1024px;
    `
  )}
  ${media.desktop(
    'min-width',
    css`
      max-width: 1288px;
    `
  )}
  ${media.extra(
    'min-width',
    css`
      max-width: 1536px;
    `
  )}
`;

export default StyledApp;
