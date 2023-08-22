import Logo from './logo';
import Nav from './nav';

export default function Header() {
  return (
    <header className='fixed top-0 z-[var(--z-header)] flex h-20 w-full items-center bg-primary text-white'>
      <div className='mx-auto flex w-[calc(100%_-_200px)] items-center justify-between'>
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
