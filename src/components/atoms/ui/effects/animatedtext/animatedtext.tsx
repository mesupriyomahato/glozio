"use client"
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './animatedtext.module.scss';

interface AnimatedTextProps {
  text: string[];
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.wrapContainer}`,
        scrub: true,
        start: 'top center',
        end: 'top 35%',
      },
    });

    text.forEach((word, index) => {
      timeline.to(`.${styles.wrapContainer} > div:nth-child(${index + 1}) > span`, {
        opacity: 1,
        duration: 1,
        ease: 'none',
      });
    });
  }, [text]);

  return (
    <div className={styles.wrapContainer}>
      {text.map((word, index) => (
        <div key={index} className={styles.textContainer}>
          <span className={styles.text}>{word}</span>
        </div>
      ))}
    </div>
  );
};

export default AnimatedText;