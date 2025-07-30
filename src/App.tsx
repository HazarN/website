import Contact from '@features/contact/Contact';
import Hero from '@features/hero/Hero';
import Portfolio from '@features/portfolio/Portfolio';
import Services from '@features/services/Services';

import Section from '@ui/Section';

import StyledApp from '@styles/App.styled';
import GlobalStyles from '@styles/GlobalStyles';

function App() {
  return (
    <StyledApp>
      <GlobalStyles />

      <>
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
      </>
    </StyledApp>
  );
}

export default App;
