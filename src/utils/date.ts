export const getTime = () => {
  const date = new Date();
  const currentDate = date.toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const time = date.toTimeString().slice(0, 8);

  return { currentDate, time };
};
