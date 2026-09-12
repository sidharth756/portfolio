import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.35,
  baseRotation = 1,
  blurStrength = 2.5,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom 70%',
  wordAnimationEnd = 'bottom 60%'
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const extractText = (node) => {
      if (typeof node === 'string') return node;
      if (typeof node === 'number') return String(node);
      if (Array.isArray(node)) return node.map(extractText).join('');
      if (node?.props?.children) return extractText(node.props.children);
      return '';
    };
    const text = extractText(children);
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

      gsap.fromTo(
        el,
        { transformOrigin: '0% 50%', rotate: baseRotation },
        {
          ease: 'none',
          rotate: 0,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top 85%',
            end: rotationEnd,
            scrub: 1,
          },
        }
      );

      const wordElements = el.querySelectorAll('.word');

      gsap.fromTo(
        wordElements,
        {
          opacity: baseOpacity,
          filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
        },
        {
          ease: 'none',
          opacity: 1,
          filter: 'blur(0px)',
          stagger: 0.02,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top 85%',
            end: wordAnimationEnd,
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <div ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <div className={`scroll-reveal-text ${textClassName}`}>{splitText}</div>
    </div>
  );
};

export default ScrollReveal;
