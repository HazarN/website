import { lazy, Suspense } from 'react';

import Section from '@ui/Section';

import StyledApp from '@styles/App.styled';
import GlobalStyles from '@styles/GlobalStyles';

import LoadingIndicator from '@ui/LoadingIndicatior';

const Contact = lazy(() => import('@features/contact/Contact'));
const Hero = lazy(() => import('@features/hero/Hero'));
const Portfolio = lazy(() => import('@features/portfolio/Portfolio'));
const Services = lazy(() => import('@features/services/Services'));

function App() {
  return (
    <StyledApp>
      <GlobalStyles />

      <Suspense fallback={<LoadingIndicator />}>
        <Section id='hero'>
          <Hero />
        </Section>

        <Section id='services'>
          <Services />
        </Section>

        <Portfolio />

        <Section id='contact'>
          <Contact />
        </Section>
      </Suspense>
    </StyledApp>
  );
}

export default App;
