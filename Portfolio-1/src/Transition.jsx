import {motion as m} from 'framer-motion';

const Transition = (OgComponent)=> {
  return () => (
    <>
      <OgComponent />
      <m.div
      className='slide-in bg-zinc-700 w-full min-h-screen fixed top-0 left-0 origin-bottom'
      initial={{scaleY: 0}}
      animate={{scaleY: 0}}
      exit={{scaleY: 1}}
      transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1],}}
      />
      <m.div
      className='slide-out bg-zinc-700 w-full min-h-screen fixed top-0 left-0 origin-top'
      initial={{scaleY: 1}}
      animate={{scaleY: 0}}
      exit={{scaleY: 0}}
      transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1],}}
      />
    </>
  );
};

export default Transition;