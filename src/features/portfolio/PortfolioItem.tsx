import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ONE_SECOND } from '@app/constants';

import IProject from '@data/IProject';

import {
  AnimatedImageWrapper,
  AnimatedTextWrapper,
  StyledPortfolioItem,
} from '@features/portfolio/Portfolio.styled';

import Button from '@ui/Button';

const ButtonGroup = styled.div`
  display: flex;
`;
const AnimatedButtonGroup = motion(ButtonGroup);

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};
const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      staggerChildren: 0.2,
    },
  },
};
const childVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

type Props = {
  project: IProject;
};
function PortfolioItem({ project }: Props) {
  const { desc, title, link, images } = project;

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, ONE_SECOND * 4);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <StyledPortfolioItem>
      <AnimatedImageWrapper variants={imgVariants} initial='initial' whileInView='animate'>
        <AnimatePresence mode='wait'>
          <motion.img
            src={images.at(imageIndex)}
            key={imageIndex}
            alt={`image-${imageIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </AnimatedImageWrapper>

      <AnimatedTextWrapper variants={textVariants} initial='initial' whileInView='animate'>
        <motion.h1 variants={childVariants}>{title}</motion.h1>
        <motion.p variants={childVariants}>{desc}</motion.p>

        <AnimatedButtonGroup variants={childVariants}>
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
        </AnimatedButtonGroup>
      </AnimatedTextWrapper>
    </StyledPortfolioItem>
  );
}

export default PortfolioItem;
