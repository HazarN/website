import { useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

import portfolio from '@data/portfolio';

import StyledPortfolio from '@features/portfolio/Portfolio.styled';
import PortfolioItem from '@features/portfolio/PortfolioItem';
import PortfolioList from '@features/portfolio/PortfolioList';

import PageSection from '@ui/PageSection';

function Portfolio() {
  const ref = useRef<HTMLElement>(null);

  const [containerDistance, setContainerDistance] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setContainerDistance(rect.left);
    }
  }, []);

  const totalItems = portfolio.length + 1;
  const { scrollYProgress } = useScroll({ target: ref });
  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * portfolio.length]
  );

  return (
    <StyledPortfolio numOfProjects={totalItems} ref={ref}>
      <PortfolioList numOfProjects={totalItems} xTranslate={xTranslate}>
        {/* Empty div to skip */}
        <div style={{ width: window.innerWidth - containerDistance }} />

        {portfolio.map((project) => (
          <PortfolioItem project={project} key={project.id} />
        ))}
      </PortfolioList>

      {portfolio.map(() => (
        <PageSection />
      ))}
    </StyledPortfolio>
  );
}

export default Portfolio;
