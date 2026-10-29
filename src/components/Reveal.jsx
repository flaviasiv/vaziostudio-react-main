import { motion, useReducedMotion } from 'motion/react';

/* Entrada ao rolar: o conteúdo sobe 24px e aparece, uma vez. Serve à leitura, não enfeita. */
export default function Reveal({ as = 'div', delay = 0, className, children }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
