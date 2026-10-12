import Hero from '../components/Hero';
import Works from '../components/Works';
import About from '../components/About';

export default function Home({ ready }) {
  return (
    <>
      <Hero ready={ready} />
      <Works />
      <About />
    </>
  );
}
