import { useEffect } from 'react';
import { useState } from 'react';

const getTimeFromDate = (date) => date.toISOString().substring(11, 19);

export const MyComponent = () => {
  let [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    console.log(currentDate);
  }, []);

  setTimeout(() => {
    setCurrentDate(new Date());
  }, 1000);

  return <div>{getTimeFromDate(currentDate)}</div>;
};
