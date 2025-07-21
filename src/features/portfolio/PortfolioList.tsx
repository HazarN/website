import IProject from '@data/IProject';

import { StyledPortfolioList } from '@features/portfolio/Portfolio.styled';
import PortfolioItem from '@features/portfolio/PortfolioItem';

type Props = {
  portfolio: IProject[];
  numOfProjects: number;
};
function PortfolioList({ portfolio, numOfProjects }: Props) {
  return (
    <StyledPortfolioList numOfProjects={numOfProjects}>
      {portfolio.map((project) => (
        <PortfolioItem project={project} key={project.id} />
      ))}
    </StyledPortfolioList>
  );
}

export default PortfolioList;
