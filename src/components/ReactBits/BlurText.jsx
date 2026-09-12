import { motion } from 'framer-motion';

export default function BlurText({
  text = '',
  delay = 0.05,
  className = '',
  animateBy = 'words', // 'words' or 'letters'
  direction = 'top',
}) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  const getVariant = () => {
    switch (direction) {
      case 'top':
        return { initial: { filter: 'blur(10px)', opacity: 0, y: -20 }, animate: { filter: 'blur(0px)', opacity: 1, y: 0 } };
      case 'bottom':
        return { initial: { filter: 'blur(10px)', opacity: 0, y: 20 }, animate: { filter: 'blur(0px)', opacity: 1, y: 0 } };
      default:
        return { initial: { filter: 'blur(10px)', opacity: 0 }, animate: { filter: 'blur(0px)', opacity: 1 } };
    }
  };

  const variant = getVariant();

  return (
    <span className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`}>
      {elements.map((el, index) => (
        <motion.span
          key={index}
          initial={variant.initial}
          whileInView={variant.animate}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: index * delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block"
        >
          {el === '' ? '\u00A0' : el}
        </motion.span>
      ))}
    </span>
  );
}
