import { easeInOut } from 'motion';
import { motion } from 'motion/react';
import { FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa';
import styled, { css } from 'styled-components';

import HeroContainer from '@features/hero/HeroContainer.styled';
import media from '@styles/media';

const HeroTitle = styled.h1`
  margin-top: 50px;
  font-size: 100px;
  color: wheat;

  span {
    color: white;
  }

  ${media.extra(
    'max-width',
    css`
      font-size: 72px;
    `
  )}
  ${media.laptop(
    'max-width',
    css`
      font-size: 64px;
    `
  )}
  ${media.tablet(
    'max-width',
    css`
      font-size: 48px;
    `
  )}
`;
const AnimatedTitle = motion(HeroTitle);

const infoVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};
const HeroInfo = styled.div`
  width: 30%;

  h2 {
    white-space: nowrap;
  }

  p {
    font-size: 16px;
    margin: 16px 0;
    color: #ddd;
  }

  ${media.extra(
    'max-width',
    css`
      width: 60%;
    `
  )}
`;
const AnimatedHeroInfo = motion(HeroInfo);

const Links = styled.ul`
  display: flex;
  justify-content: space-between;

  margin-top: 16px;

  ${media.tablet(
    'max-width',
    css`
      justify-content: center;
      gap: 24px;
    `
  )}
`;
const AnimatedLinks = motion(Links);

const MouseIcon = styled.a`
  margin-bottom: 50px;
  width: max-content;

  ${media.tablet(
    'max-width',
    css`
      display: none;
    `
  )}
`;
const AnimatedMouseIcon = motion(MouseIcon);

function HeroLeft() {
  return (
    <HeroContainer>
      <AnimatedTitle
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hey There,
        <br />
        <span>I'm Hazar</span>
      </AnimatedTitle>

      <AnimatedHeroInfo variants={infoVariants} initial='initial' animate='animate'>
        <motion.h2 variants={infoVariants}> Software Developer</motion.h2>
        <motion.p variants={infoVariants}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </motion.p>

        <AnimatedLinks variants={infoVariants}>
          <motion.a
            variants={infoVariants}
            target='_blank'
            href='https://linkedin.com/in/hazarnamdar'
          >
            <FaLinkedin size={48} />
          </motion.a>

          <motion.a variants={infoVariants} target='_blank' href='https://github.com/HazarN'>
            <FaGithub size={48} />
          </motion.a>

          <motion.a variants={infoVariants} target='_blank' href='https://leetcode.com/HazarN'>
            <FaGlobe size={48} />
          </motion.a>
        </AnimatedLinks>
      </AnimatedHeroInfo>

      <AnimatedMouseIcon
        animate={{ y: [0, 5], opacity: [0, 1, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: easeInOut,
        }}
        href='/#services'
      >
        <svg
          width='50px'
          height='50px'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z'
            stroke='white'
            strokeWidth='1'
          />
          <motion.path
            d='M12 5V8'
            stroke='white'
            strokeWidth='1'
            strokeLinecap='round'
            animate={{ y: [0, 5] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: easeInOut,
            }}
          />
        </svg>
      </AnimatedMouseIcon>
    </HeroContainer>
  );
}

export default HeroLeft;
