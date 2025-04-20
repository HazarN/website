import media from '@styles/media';
import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import styled, { css } from 'styled-components';

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

function BubbleSpeech() {
  return (
    <AnimatedStyledBubbleSpeech animate={{ opacity: [0, 1] }} transition={{ duration: 1 }}>
      <Bubble className='bubble'>
        <TypeAnimation
          sequence={[
            'Building Scalable Web Applications',
            1000,
            'Developing Robust Backend Solutions',
            1000,
            'Creating Seamless User Experiences',
            1000,
            'Optimizing Code for Performance',
            1000,
          ]}
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
