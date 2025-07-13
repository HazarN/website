import type { Interpolation } from 'styled-components';

type Breakpoints = {
  mobile: string;
  tablet: string;
  laptop: string;
  desktop: string;
  extra: string;
};

type Query = 'min-width' | 'max-width';

const sizes: Breakpoints = {
  mobile: '640px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1288px',
  extra: '1536px',
};
type Media = {
  [key in keyof Breakpoints]: (query: Query, styles: Interpolation<any>) => Interpolation<any>;
};

const media = Object.keys(sizes).reduce((acc, label) => {
  const typedLabel = label as keyof Breakpoints;

  acc[typedLabel] = (query: Query, styles: Interpolation<any>) => {
    const size = sizes[typedLabel];

    return `
      @media (${query}: ${size}) {
        ${styles}
      }
    `;
  };

  return acc;
}, {} as Media);

export default media;
