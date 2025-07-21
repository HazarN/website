import portfolio from '@data/portfolio';
import StyledPortfolio from './Portfolio.styled';
import PortfolioList from './PortfolioList';

function Portfolio() {
  return (
    <StyledPortfolio numOfProjects={portfolio.length}>
      <PortfolioList portfolio={portfolio} numOfProjects={portfolio.length} />
    </StyledPortfolio>
  );
}

export default Portfolio;
