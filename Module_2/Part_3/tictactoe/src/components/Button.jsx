import { useState } from 'react';
import styles from './Button.module.css';

const ButtonLayout = ({ itemId, player, state, setState }) => {
  return (
    <button className={styles.button} data-id={itemId} onClick={() => setState('X')}>
      {state}
    </button>
  );
};

export const Button = ({ itemId, player }) => {
  // const [id, setId] = useState();
  const [state, setState] = useState(' ');

  return <ButtonLayout itemId={itemId} state={state} setState={setState} />;
};
