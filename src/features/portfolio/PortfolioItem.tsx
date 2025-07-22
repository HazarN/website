import styled from 'styled-components';

import IProject from '@data/IProject';

import {
  ImageWrapper,
  StyledPortfolioItem,
  TextWrapper,
} from '@features/portfolio/Portfolio.styled';

import Button from '@ui/Button';

const ButtonGroup = styled.div`
  display: flex;
`;

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

        <ButtonGroup>
          <a href={!link ? 'https://github.com/HazarN' : link} target='_blank'>
            <Button>View Project</Button>
          </a>

          {link && (
            <Button variant='secondary'>
              Deployed with
              {link.split('.').at(-2) === 'amplifyapp' && ' AWS Amplify'}
              {link.split('.').at(-2) === 'onrender' && ' Render'}
            </Button>
          )}
        </ButtonGroup>
      </TextWrapper>
    </StyledPortfolioItem>
  );
}

export default PortfolioItem;
