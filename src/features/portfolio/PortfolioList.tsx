import { AnimatedStyledPortfolioList } from '@features/portfolio/Portfolio.styled';
import { MotionValue } from 'motion';
import { PropsWithChildren } from 'react';

type Props = {
  numOfProjects: number;
  xTranslate: MotionValue<number>;
};
function PortfolioList({ children, numOfProjects, xTranslate }: PropsWithChildren<Props>) {
  return (
    <AnimatedStyledPortfolioList numOfProjects={numOfProjects} style={{ x: xTranslate }}>
      {children}
    </AnimatedStyledPortfolioList>
  );
}

export default PortfolioList;
