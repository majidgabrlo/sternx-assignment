export const numberTransformer = (number: number) => {
  let [integer, decimal] = String(number).split(".");
  if (decimal) {
    decimal = `.${decimal}`;
  } else {
    decimal = "";
  }
  return (
    integer
      .split("")
      .reverse()
      .map((digit, i) => {
        if (i % 3 === 0 && i !== 0) return digit + ",";
        return digit;
      })
      .reverse()
      .join("") + decimal
  );
};
