import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import Situations from '../components/Situations';
import Method from '../components/Method';
import Work from '../components/Work';
import Note from '../components/Note';
import Faq from '../components/Faq';
import { useLang } from '../i18n/useLang';
import { usePageMeta } from '../utils/usePageMeta';

export default function Home() {
  const { t } = useLang();
  const { ready } = useOutletContext();
  usePageMeta(t.meta.title, t.meta.description);
  return (
    <>
      <Hero ready={ready} />
      <Situations />
      <Method />
      <Work />
      <Note />
      <Faq />
    </>
  );
}
