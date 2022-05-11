import { useSelector } from 'react-redux';
import styles from './GameHeading.module.scss';

const GameHeading = ({ init }) => {
  const points = useSelector((state) => state.game.player.points);

  return (
    <>
      {points > 0 && (
        <div className={styles.points}>
          <img src='/donut.png' />
          <p className={styles.heading}>{points}</p>
        </div>
      )}
      {points <= 0 && !init && (
        <p className={styles.heading}>Naciśnij przycisk, żeby odsłuchać</p>
      )}
      {points <= 0 && init && (
        <p className={styles.heading}>Wybierz usłyszaną literę</p>
      )}
    </>
  );
};

export default GameHeading;
