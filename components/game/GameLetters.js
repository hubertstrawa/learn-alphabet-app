import { useState, useEffect } from 'react';
import styles from './GameLetters.module.scss';
import Modal from '../ui/modal/Modal';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { getRandomNumber } from '../../utils/getRandomNumber';
import { getRandomValueArray } from '../../utils/getRandomValueArray';
import GameHeading from './GameHeading';
import Image from 'next/image';

const variants = {
  open: { y: 0 },
  closed: { y: 270 },
};

const GameLetters = ({ letters, addPoints }) => {
  const initialRandomValue = getRandomValueArray(letters);
  const [value, setValue] = useState(initialRandomValue);
  const [spokenBy, setSpokenBy] = useState(
    initialRandomValue.sources[getRandomNumber(2)]
  );
  const [open, setIsOpen] = useState(false);
  const [init, setInit] = useState(false);

  const playHandler = () => {
    if (!init) {
      setInit(true);
    }
    let audio = new Audio(spokenBy.src);
    audio.play();
  };

  const clickLetterHandler = (letter) => {
    if (letter === value) {
      addPoints(5);
      setIsOpen(true);

      let success = new Audio('/sounds/success.mp3');
      success.volume = 0.5;
      success.play();
    } else {
      let fail = new Audio('/sounds/try-again.mp3');
      fail.volume = 0.5;
      fail.play();
    }
  };
  const clickInsideModal = (source) => {
    if (source.spokenBy === spokenBy.spokenBy) {
      addPoints(10);
      let success = new Audio('/sounds/success2.mp3');
      success.volume = 0.5;
      success.play();
    }
    setIsOpen(false);
    const newV = getRandomValueArray(letters);
    setValue(newV);
    const randomNumber = getRandomNumber(2);
    setSpokenBy(newV.sources[randomNumber]);
    let audio = new Audio(newV.sources[randomNumber].src);
    setTimeout(() => {
      audio.play();
    }, 500);
  };

  return (
    <>
      {open && (
        <Modal>
          <div style={{ textAlign: 'center' }}>
            <h1>
              <span style={{ color: 'green' }}>BRAWO</span> 💚 Kto to
              powiedział?
            </h1>
            <div className={styles.chooseSpokenBy}>
              {value.sources.map((source, i) => {
                return (
                  <div onClick={() => clickInsideModal(source)} key={i}>
                    <Image
                      src={source.image}
                      layout='responsive'
                      placeholder='blur'
                      blurDataURL='/placeholder.jpg'
                      width={200}
                      height={200}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Modal>
      )}
      <section className={styles.container}>
        <img src='worms-left.png' className={styles.wormsLeft} />
        <img src='worms-right.png' className={styles.wormsRight} />
        <motion.div
          animate={init ? 'open' : 'closed'}
          variants={variants}
          className={styles.inner}
        >
          <GameHeading init={init} />
          <motion.button
            className={styles.button}
            onClick={playHandler}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src='/sound1.svg' />
          </motion.button>
        </motion.div>
        <motion.div
          className={styles.game}
          animate={init ? 'open' : 'closed'}
          variants={variants}
        >
          {init && (
            <ul className={styles.list}>
              {letters.map((val, i) => (
                <motion.li
                  initial={{ opacity: 0, y: 50, scale: 0.3 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    transition: { duration: 0.2 },
                  }}
                  transition={{ delay: i / 15 }}
                  key={val.src}
                  onClick={() => clickLetterHandler(val)}
                >
                  {val.value}
                </motion.li>
              ))}
            </ul>
          )}
        </motion.div>
      </section>
    </>
  );
};

export default GameLetters;
