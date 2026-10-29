import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import SideMenu from './components/SideMenu.jsx';
import Intro from './components/Intro.jsx';
import Hero from './components/Hero.jsx';
import Works from './components/Works.jsx';
import FieldNotes from './components/FieldNotes.jsx';
import InsideMyHead from './components/InsideMyHead.jsx';
import Contact from './components/Contact.jsx';

const INTRO_KEY = 'hrea-intro-seen';

function shouldPlayIntro() {
  try {
    return !sessionStorage.getItem(INTRO_KEY);
  } catch {
    return false;
  }
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [introOn, setIntroOn] = useState(shouldPlayIntro);

  // Lock page scroll while the menu is open, close on Escape
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', menuOpen);
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const finishIntro = useCallback(() => {
    try {
      sessionStorage.setItem(INTRO_KEY, '1');
    } catch {
      /* storage blocked — intro will just replay */
    }
    setIntroOn(false);
  }, []);

  return (
    <>
      <Header onMenu={() => setMenuOpen(true)} menuOpen={menuOpen} logoVisible={!introOn} />
      <main>
        <Hero />
        <Works />
        <FieldNotes />
        <InsideMyHead />
        <Contact />
      </main>
      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      {introOn && <Intro onDone={finishIntro} />}
    </>
  );
}
