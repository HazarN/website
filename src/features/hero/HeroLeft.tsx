import { easeInOut } from 'motion';
import { motion } from 'motion/react';
import { FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa';
import styled, { css } from 'styled-components';

import HeroContainer from '@features/hero/HeroContainer.styled';
import media from '@styles/media';
import AnimatedTitle from '@ui/AnimatedTitle';
import MouseSvg from '@ui/MouseSvg';

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
    text-align: center;
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
        <motion.p variants={infoVariants}>I'm a developer who enjoys writing JavaScript</motion.p>

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
        <MouseSvg />
      </AnimatedMouseIcon>
    </HeroContainer>
  );
}

export default HeroLeft;
