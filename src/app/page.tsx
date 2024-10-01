import { MovieRow } from './components/MovieRow';
import { Banner } from './components/Banner';

export default function Home() {
  return (
    <main className='relative pb-24 pl-4 lg:pl-16'>
      <Banner />
      <MovieRow sectionTitle='Sessão 1' />
      <MovieRow sectionTitle='Sessão 2' />

      <MovieRow sectionTitle='Sessão 2' />

      <MovieRow sectionTitle='Sessão 2' />
    </main>
  );
}
