import { useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

import portfolio from '@data/portfolio';

import { useContainerDistance } from '@hooks/useContainerDistance';

import StyledPortfolio from '@features/portfolio/Portfolio.styled';
import PortfolioItem from '@features/portfolio/PortfolioItem';
import PortfolioList from '@features/portfolio/PortfolioList';

import ProgressSvg from '@ui/ProgressSvg';
import Section from '@ui/Section';

function Portfolio() {
  const ref = useRef<HTMLElement>(null);
  const [containerDistance, width] = useContainerDistance(ref);
  const { scrollYProgress } = useScroll({ target: ref });

  const totalItems = portfolio.length + 1;
  const xTranslate = useTransform(scrollYProgress, [0, 1], [0, -width * portfolio.length]);

  return (
    <StyledPortfolio numOfProjects={totalItems} ref={ref}>
      <PortfolioList numOfProjects={totalItems} xTranslate={xTranslate}>
        {/* Empty div to skip */}
        <div style={{ width: window.innerWidth - containerDistance }} />

        {portfolio.map((project) => (
          <PortfolioItem project={project} key={project.id} />
        ))}
      </PortfolioList>

      {/* To be able to slide between portfolios */}
      {portfolio.map((_, i) => (
        <Section key={i} />
      ))}

      <ProgressSvg scrollYProgress={scrollYProgress} />
    </StyledPortfolio>
  );
}

export default Portfolio;
