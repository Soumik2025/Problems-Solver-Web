import Link from 'next/link';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <h3>
        Made By{' '}
        <Link href='https://github.com/Soumik2025'>
          Soumik Sen
        </Link>
      </h3>
    </footer>
  );
};

export default Footer;
