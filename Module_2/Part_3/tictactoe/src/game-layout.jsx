import PropTypes from 'prop-types';
import { Field, Information } from './components';
import { PLAYER, STATUS } from './constants';
import styles from './game.module.css';

export const GameLayout = ({ status, currentPlayer, field, handleCellClick, handleRestart }) => (
  <div className={styles.game}>
    <Information status={status} currentPlayer={currentPlayer} />
    <Field field={field} handleCellClick={handleCellClick} />
    <button className={styles.restartButton} onClick={handleRestart}>
      Начать заново
    </button>
  </div>
);

GameLayout.propTypes = {
  status: PropTypes.oneOf([STATUS.DRAW, STATUS.TURN, STATUS.WIN]),
  currentPlayer: PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY]),
  field: PropTypes.arrayOf(PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY])),
  handleCellClick: PropTypes.func,
  handleRestart: PropTypes.func,
};
