import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { DancerSearch } from '@/components/DancerSearch/DancerSearch';

export function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <DancerSearch />
    </>
  );
}
