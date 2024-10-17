import Link from 'next/link';
import styles from '../app/globals.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/login">Login</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/registro">Registro</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/nasa">NASA API</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/picsum">Lorem Picsum</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/jokes">Jokes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
