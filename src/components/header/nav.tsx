import { Link } from 'react-router-dom';


const NavItem = ({ href, label }: MenuItemProps) => (
  <Link to={href} className='text-base text-white'>
    {label}
  </Link>
);

export default function Nav() {
  const item: MenuItemProps[] = [
    {
      href: '/',
      label: 'Home'
    },
    {
      href: '/',
      label: 'Client'
    },
    {
      href: '/',
      label: 'About Us'
    },
    {
      href: '/',
      label: 'Rolus'
    },
    {
      href: '/',
      label: 'Product'
    },
    {
      href: '/',
      label: 'Say Hi'
    }
  ];

  return (
    <nav className='flex gap-x-8 font-semibold'>
      {item.map((item: MenuItemProps) => (
        <NavItem key={item.label} href={item.href} label={item.label} />
      ))}
    </nav>
  );
}
