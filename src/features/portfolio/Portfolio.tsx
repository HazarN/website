import { useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

import portfolio from '@data/portfolio';

import StyledPortfolio from '@features/portfolio/Portfolio.styled';
import PortfolioItem from './PortfolioItem';
import PortfolioList from './PortfolioList';

function Portfolio() {
  const ref = useRef<HTMLElement>(null);

  const [containerDistance, setContainerDistance] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setContainerDistance(rect.left);
    }
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });
  const totalItems = portfolio.length + 1;
  const xTranslate = useTransform(scrollYProgress, [0, 1], [0, -window.innerWidth * totalItems]);

  return (
    <StyledPortfolio numOfProjects={totalItems} ref={ref}>
      <PortfolioList numOfProjects={totalItems} xTranslate={xTranslate}>
        <div style={{ width: window.innerWidth - containerDistance, backgroundColor: 'pink' }} />

        {portfolio.map((project) => (
          <PortfolioItem project={project} key={project.id} />
        ))}
      </PortfolioList>
    </StyledPortfolio>
  );
}

export default Portfolio;
