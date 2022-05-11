import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import Game from '../components/game/Game';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <section className={styles.container}>
      {/* <Game /> */}
      <div className={styles.showcase}>
        <h1>LearnABC</h1>
        <p>Naucz się alfabetu i nie tylko</p>
        <Link href='/game'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.button}
          >
            Graj
          </motion.button>
        </Link>
      </div>
      <motion.img
        initial={{ y: 500, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        src='/Wormies.png'
        className={styles.img}
      />
    </section>
  );
};

export default HomePage;
