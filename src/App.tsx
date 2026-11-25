import { GrainOverlay } from '@/components/shared';
import { LanguageProvider } from '@/i18n';
import { Navbar } from '@/sections/Navbar';
import { Hero } from '@/sections/Hero';
import { Story } from '@/sections/Story';
import { Menu } from '@/sections/Menu';
import { Signature } from '@/sections/Signature';
import { Gatherings } from '@/sections/Gatherings';
import { Words } from '@/sections/Words';
import { Reservations } from '@/sections/Reservations';
import { Footer } from '@/sections/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <GrainOverlay />
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Signature />
        <Gatherings />
        <Words />
        <Reservations />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
