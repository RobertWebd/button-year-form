import { useState } from 'react';
import { getTime } from '../../utils/date';
import { UpdateButton, YearWrapper } from './YearPage.styled';

export const YearPage = () => {
  const [data, setData] = useState(getTime());

  const handleGetTime = () => {
    setData(getTime());
  };

  return (
    <YearWrapper>
      <div>{data.currentDate}</div>
      <div>{data.time}</div>
      <UpdateButton onClick={handleGetTime}>Обновить</UpdateButton>
    </YearWrapper>
  );
};
