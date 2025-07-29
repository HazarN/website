import { useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

import portfolio from '@data/portfolio';

import StyledPortfolio from '@features/portfolio/Portfolio.styled';
import PortfolioItem from '@features/portfolio/PortfolioItem';
import PortfolioList from '@features/portfolio/PortfolioList';

import PageSection from '@ui/PageSection';
import ProgressSvg from '@ui/ProgressSvg';

function Portfolio() {
  const ref = useRef<HTMLElement>(null);

  const [containerDistance, setContainerDistance] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);

      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    window.addEventListener('resize', updateWidth);

    // On mount
    updateWidth();

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const totalItems = portfolio.length + 1;
  const { scrollYProgress } = useScroll({ target: ref });
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

      {portfolio.map((_, i) => (
        <PageSection key={i} />
      ))}

      <ProgressSvg scrollYProgress={scrollYProgress} />
    </StyledPortfolio>
  );
}

export default Portfolio;
