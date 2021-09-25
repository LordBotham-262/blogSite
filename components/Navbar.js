import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
    <div className='logo'>
      <Link href='/' passHref>
        <h1>The Highway Guy</h1>
      </Link>
    </div>
    <Link href='/about'><a>About</a></Link>
    <Link href='/contact'><a>Contact</a></Link>
    <Link href='/contribute'><a>Contribute</a></Link>

  </nav>
  );
}
 
export default Navbar;