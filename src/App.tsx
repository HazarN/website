import Contact from '@features/contact/Contact';
import Hero from '@features/hero/Hero';
import Portfolio from '@features/portfolio/Portfolio';
import Services from '@features/services/Services';

import PageSection from '@ui/PageSection';

import StyledApp from '@styles/App.styled';
import GlobalStyles from '@styles/GlobalStyles';

function App() {
  return (
    <StyledApp>
      <GlobalStyles />

      <>
        <PageSection id='hero'>
          <Hero />
        </PageSection>

        <PageSection id='services'>
          <Services />
        </PageSection>

        <PageSection id='portfolio'>
          <Portfolio />
        </PageSection>

        <PageSection id='contact'>
          <Contact />
        </PageSection>
      </>
    </StyledApp>
  );
}

export default App;
