import GameLetters from './GameLetters';
import { useSelector, useDispatch } from 'react-redux';
import { gameActions } from '../../store/game-slice';

const Game = () => {
  const game = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const addPoints = (num) => {
    dispatch(gameActions.addPoints(num));
  };

  return (
    <div>
      <GameLetters
        addPoints={addPoints}
        letters={game.values}
        player={game.player}
      />
    </div>
  );
};

export default Game;
