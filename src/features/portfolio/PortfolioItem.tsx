import IProject from '@data/IProject';

import {
  ImageWrapper,
  StyledPortfolioItem,
  TextWrapper,
} from '@features/portfolio/Portfolio.styled';

type Props = {
  project: IProject;
};
function PortfolioItem({ project }: Props) {
  const { desc, title, link, images } = project;

  return (
    <StyledPortfolioItem>
      <ImageWrapper>
        <img src={images.at(0)} alt='' />
      </ImageWrapper>

      <TextWrapper>
        <h1>{title}</h1>
        <p>{desc}</p>
        <a href={!link ? '' : link}>
          <button>View Project</button>
        </a>
      </TextWrapper>
    </StyledPortfolioItem>
  );
}

export default PortfolioItem;
