export const add = (str: string): any => {
  if (!str) return 0;

  const nums = str.split(',');
  return nums.reduce((acc, unit) => acc + Number(unit), 0);
}

