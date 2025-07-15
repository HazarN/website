import { TypeAnimation } from 'react-type-animation';

import { ONE_SECOND } from '@app/constants';

import AnimatedStyledBubbleSpeech, {
  StyledBubble,
  StyledProfileImage,
} from '@features/hero/BubbleSpeech.styled';

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
      <StyledBubble className='bubble'>
        <TypeAnimation
          sequence={bubbleSequence}
          wrapper='span'
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </StyledBubble>
      <StyledProfileImage src='/hero-pp.jpeg' alt='profile photo' />
    </AnimatedStyledBubbleSpeech>
  );
}

export default BubbleSpeech;
