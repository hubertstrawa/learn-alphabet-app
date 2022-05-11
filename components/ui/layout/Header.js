import Link from 'next/link';
import styles from './Header.module.css';
import { useSelector } from 'react-redux';

const Header = () => {
  const points = useSelector((state) => state.game.player.points);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>LearnABC 🧒</div>
      <div>Punkty: {points} 👌</div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href='/'>Strona główna</Link>
          </li>
          <li>
            <Link href='/game'>GRAJ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
