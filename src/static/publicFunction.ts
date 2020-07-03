export const pad = (num: number): string => num < 10 ? `0${num}` : `${num}`;

export const getDetailTime = (utcTime) => {
  const date = new Date(utcTime);
  const yyyy = date.getFullYear();
  const mm = date.getMonth();
  const dd = date.getDate();
  return `${yyyy}-${pad(mm)}-${pad(dd)}`;
};
