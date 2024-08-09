export const add = (str: string): any => {
    const validateNums = (nums: any[]) => {
        const invalidFlag = nums.some(n => isNaN(Number(n)));
        if (invalidFlag) throw new Error('Please check the expression once again.')
    }
  const parseStr = (str: string): any => { 
    const delimRegxp = /^\/\/(.)\n/;
    const match = str.match(delimRegxp);
    if (!match) throw new Error('Please check the expression.');
    const delim = match[1];
    const expr = str.slice(match[0].length);
    return { delim, expr };
  };
  if (!str) return 0;
  let nums;
  if (str.startsWith('//')) {
    const {delim, expr} = parseStr(str);
    nums = expr.split(delim);
  } else {
    // handle new lines
    str = str.split('\n').map(subStr => subStr.trim()).join(','); 
    nums = str.split(',');
  }

  // throw an error if non-number is found
  validateNums(nums);

  return nums.reduce((acc: number, unit: number) => acc + Number(unit), 0);
}

