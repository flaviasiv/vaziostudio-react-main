/* A mão da marca, em cinza escuro sobre fundo claro e em cinza claro sobre fundo escuro (segue o tema). */
export default function HandMark({ className, height }) {
  return (
    <picture>
      <source media="(prefers-color-scheme: dark)" srcSet="/hand-light.webp" />
      <img src="/hand-dark.webp" alt="" width="568" height="295" className={className} style={height ? { height } : undefined} />
    </picture>
  );
}
