type Key = {
  key: string;
  value: string;
  color: "primary" | "secondary";
  callback: (expression: string) => string;
};

const buildNumericKeys = () => {
  const result: Key[] = [];

  for (let i = 0; i < 10; i++) {
    const numericKey: Key = {
      key: i.toString(),
      value: i.toString(),
      color: "secondary",
      callback: (expression: string) => expression.concat(i.toString()),
    };

    result.push(numericKey);
  }

  return result;
};

export const numericKeys: Key[] = buildNumericKeys();
