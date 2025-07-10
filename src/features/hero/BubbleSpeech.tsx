import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import styled, { css } from 'styled-components';

import { ONE_SECOND } from '@app/constants';
import media from '@styles/media';

// Styles
const Bubble = styled.p`
  width: 100%;
  height: 100px;
  background-color: white;
  color: #555;
  padding: 24px;
  font-size: 18px;
  border-radius: 20px 20px 0 20px;
`;
const ProfileImage = styled.img`
  width: 55px;
  height: 50px;
  object-fit: cover;

  border-radius: 50%;
`;
const StyledBubbleSpeech = styled.div`
  margin-top: 256px;

  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 8px;

  width: 50%;

  ${media.desktop(
    'max-width',
    css`
      width: 100%;
    `
  )}
  ${media.tablet(
    'max-width',
    css`
      display: none;
    `
  )}
`;
const AnimatedStyledBubbleSpeech = motion(StyledBubbleSpeech);

// Main

const bubbleSequence = [
  'Building Scalable Web Applications',
  ONE_SECOND,
  'Developing Robust Backend Solutions',
  ONE_SECOND,
  'Creating Seamless User Experiences',
  ONE_SECOND,
  'Optimizing Code for Performance',
  ONE_SECOND,
  'Experienced for Clean Code features and SOLID',
  ONE_SECOND,
];

function BubbleSpeech() {
  return (
    <AnimatedStyledBubbleSpeech animate={{ opacity: [0, 1] }} transition={{ duration: 1 }}>
      <Bubble className='bubble'>
        <TypeAnimation
          sequence={bubbleSequence}
          wrapper='span'
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </Bubble>
      <ProfileImage src='/hero-pp.jpeg' alt='profile photo' />
    </AnimatedStyledBubbleSpeech>
  );
}

export default BubbleSpeech;
