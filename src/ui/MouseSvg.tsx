import { easeInOut, motion } from 'motion/react';

function MouseSvg() {
  return (
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
  );
}

export default MouseSvg;
