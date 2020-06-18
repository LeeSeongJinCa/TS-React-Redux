export const getDetailTime = (utcTime) => {
  const date = new Date(utcTime);
  const yyyy = date.getFullYear();
  const mm = date.getMonth();
  const dd = date.getDate();

  return `${yyyy}년 ${mm}월 ${dd}일 까지`;
};
