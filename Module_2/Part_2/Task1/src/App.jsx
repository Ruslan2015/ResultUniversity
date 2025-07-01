import { useState } from 'react';

export const App = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState('');
  const [isValueValid, setIsValueValid] = useState(false);

  const onInputButtonClick = () => {
    const promptValue = prompt();
    console.log(promptValue);
    if (promptValue.length < 3) {
      setError('Ошибка. Короткое значение!');
      setIsValueValid(false);
    } else {
      setValue(promptValue);
      setError('');
      setIsValueValid(true);
    }
  };

  const onAddButtonClick = () => {
    if (value.length >= 3) {
      const id = Date.now();
      setList((list) => [...list, { id, value }]);
      setError('');
      setIsValueValid(true);
    }
  };

  return (
    <div className="app">
      <h1 className="page-heading">Ввод значения</h1>
      <p className="no-margin-text">
        Текущее значение <code>value</code>: "<output className="current-value">{value}</output>"
      </p>
      <div className="error">{error}</div>
      <div className="buttons-container">
        <button className="button" onClick={onInputButtonClick}>
          Ввести новое
        </button>
        <button className="button" disabled={!isValueValid} onClick={onAddButtonClick}>
          Добавить в список
        </button>
      </div>
      <div className="list-container">
        <h2 className="list-heading">Список:</h2>
        <p className="no-margin-text">Нет добавленных элементов</p>
        <ul className="list">
          {list.map(({ id, value }) => (
            <li key={id}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
