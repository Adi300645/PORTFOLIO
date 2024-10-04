import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const LoadingScreen = ({ onAnimationComplete }) => {
  const controls = useAnimation();
  const backgroundControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Animate the line
      await controls.start({
        width: '100%',
        transition: { duration: 0.8, ease: 'easeInOut' }
      });
      await controls.start({
        x: '100%',
        transition: { duration: 0.5, ease: 'easeInOut' }
      });

      // Fade out the loading text and background
      await backgroundControls.start({
        opacity: 0,
        transition: { duration: 0.5 }
      });

      // Notify parent component that animation is complete
      onAnimationComplete();
    };

    sequence();
  }, [controls, backgroundControls, onAnimationComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col items-center justify-center"
      animate={backgroundControls}
      initial={{ opacity: 1 }}
    >
      <motion.div
        className="text-xl text-opacity-60 text-gray-800 dark:text-white mb-4"
        animate={backgroundControls}
      >
        Loading
      </motion.div>
      <div className="w-64 h-1 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: 0, x: 0 }}
          animate={controls}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;