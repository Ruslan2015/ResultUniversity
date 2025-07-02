import styles from './app.module.css';
import data from '../data.json';
import { useState } from 'react';

// Commit

export const App = () => {
  // Можно задать 2 состояния — steps и activeIndex
  const [steps, setSteps] = useState(data);

  const [activeIndex, setActiveIndex] = useState(1);

  // И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем
  const [firstStep, setFirstStep] = useState(true);
  const [endStep, setEndStep] = useState(false);

  // И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала
  const nextStep = () => {
    Number(activeIndex) == 7 ? setEndStep(true) : setEndStep(false);
    if (Number(activeIndex) != 7) {
      setActiveIndex(activeIndex + 1);
      setFirstStep(false);
    } else {
      setEndStep(true);
    }
  };

  const prevStep = () => {
    if (!firstStep) {
      setActiveIndex(activeIndex - 1);
      Number(activeIndex) == 1 ? setFirstStep(true) : setFirstStep(false);
      setEndStep(false);
    } else {
      setFirstStep(true);
    }
  };

  const startOver = () => {
    setActiveIndex(Number(1));
    setFirstStep(true);
    setEndStep(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles['steps-content']}>
            {/* Для получения активного контента использйте steps и activeIndex */}
            {steps[Number(activeIndex) - 1].content}
          </div>
          <ul className={styles['steps-list']}>
            {/* Выводите <li> с помощью массива steps и метода map(), подставляя в разметку нужные значения и классы */}
            {steps.map(({ id, title, content }) => (
              <li
                key={id}
                className={
                  (Number(id) <= Number(activeIndex)
                    ? styles['steps-item'] + ' ' + styles.done
                    : styles['steps-item']) +
                  ' ' +
                  (Number(id) == Number(activeIndex) ? styles.active : null)
                }
              >
                <button className={styles['steps-item-button']} onClick={() => setActiveIndex(Number(id))}>
                  {Number(id)}
                </button>
                {/* При клике на кнопку установка выбранного шага в качестве активного */}
                {title}
              </li>
            ))}
          </ul>
          <div className={styles['buttons-container']}>
            <button className={firstStep ? styles.disabled : styles.button} onClick={prevStep}>
              Назад
            </button>
            <button className={styles.button} onClick={!endStep ? nextStep : startOver}>
              {!endStep ? 'Далее' : 'Начать сначала'}
              {/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
              {/* Или заменять всю кнопку в зависимости от условия */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
