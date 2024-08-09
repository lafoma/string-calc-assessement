export const add = (str: string): any => {
  if (!str) return 0;

  // handle new lines
  str = str.split('\n').map(subStr => subStr.trim()).join(','); 
  const nums = str.split(',');
  return nums.reduce((acc, unit) => acc + Number(unit), 0);
}

